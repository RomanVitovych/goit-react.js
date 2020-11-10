import React from 'react';
import TaskListItem from './TaskListItem'

const TasksList = ({tasks, onRemoveTask, onUpdateTask}) => (
    <ul>
        {tasks.map(({id, text, completed}) => (
            <TaskListItem 
            key={id}
            text={text}
            completed={completed}
            onRemove={() => onRemoveTask(id)} 
            onUpdate={() => onUpdateTask(id)} />
        ))}
    </ul>
);

export default TasksList;