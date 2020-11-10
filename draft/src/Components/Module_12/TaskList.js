import React from 'react';
import {connect} from 'react-redux';
import TaskListItem from './TaskListItem';
import tasksActions from '../../redux_12/Tasks/tasksActions';

const TaskList = ({tasks, onRemoveTask, onToggleCompleted}) => {
    return (
        <ul>
            {tasks.map(({id, text, completed}) => (
                <TaskListItem
                key={id}
                text={text}
                completed={completed}
                onRemove={() => onRemoveTask(id)}
                onUpdate={() => onToggleCompleted(id)} />
            ))}
        </ul>
    );
};

const mapStateToProps = (state) => {
    const {items, filter} = state.tasks;
    const normalizedFilter = filter.toLowerCase();
    const visibleTasks = items.filter(task => 
        task.text.toLowerCase().includes(normalizedFilter));
        
        return {
            tasks: visibleTasks,
        };
};

const mapDispatchToProp = {
    onRemoveTask: tasksActions.removeTask,
    onToggleCompleted: tasksActions.toggleCompleted,
};

export default connect(
    mapStateToProps,
    mapDispatchToProp)
    (TaskList);