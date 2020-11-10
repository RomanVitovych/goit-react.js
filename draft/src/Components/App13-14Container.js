import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './App13-14';
import tasksOperations from '../redux_13-14/tasks/tasksOperations';
import tasksSelectors from '../redux_13-14/tasks/tasksSelectors';
import counterSelectors from '../redux_13-14/counter/counterSelectors';
import counterActions from '../redux_13-14/counter/counterActions';

class AppContainer extends Component {
    componentDidMount() {
        this.props.onFetchTasks();
    };

    render() {
        return (
            <>
                <App {...this.props} />
            </>
        );
    }
};

const mapStateToProps = (state) => ({
    isLoadingTasks: tasksSelectors.getLoading(state),
    counterValue: counterSelectors.getValue(state),
});

const mapDispatchToProps = {
    onFetchTasks: tasksOperations.fetchTasks,
    onIncrement: counterActions.increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

