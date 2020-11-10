import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskEditor from '../Components/Module_15-16/TaskEditor';
import Filter from '../Components/Module_15-16/Filter';
import TaskList from '../Components/Module_15-16/TaskList';
import tasksOperations from '../redux_15-16/tasks/tasksOperations';
import tasksSelectors from '../redux_15-16/tasks/tasksSelectors';

class TaskerView extends Component {
    componentDidMount() {
        this.props.onFetchTasks();
    };

    render() {
        return (
            <>
                <TaskEditor />

                <Filter />
                <TaskList />
            </>
        );
    }
};

const mapStateToProps = state => ({
    isLoadingTasks = tasksSelectors.getLoading(state),
});

const mapDispatchToProps = {
    onFetchTasks: tasksOperations.fetchTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskerView);