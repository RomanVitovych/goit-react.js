import { connect } from 'react-redux';
import TaskListItem from './TaskListItem';
import tasksOperations from '../../redux_15-16/tasks/tasksOperations';
import tasksSelectors from '../../redux_15-16/tasks/tasksSelectors';

const mapState = (state, ownProps) => {
    const task = tasksSelectors.getTaskById(state, ownProps.id);
    return {
        ...task,
    };
};

const mapDispatchToProps = (dispatch, { id }) => ({
    onRemove: () => dispatch(tasksOperations.removeTask(id)),
    onToggleCompleted: () => dispatch(tasksOperations.toggleCompleted(id)),
});

export default connect(mapState, mapDispatchToProps)(TaskListItem);