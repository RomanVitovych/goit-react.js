import React, { Component } from 'react';
import {connect} from 'react-redux';
import tasksOperations from '../../redux_15-16/tasks/tasksOperations';

class TaskEditor extends Component {
    state = {
        text: '',
    };

    handleChange = (e) => {
        this.setState({
            text: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddTask(this.state.text);
        this.setState({text: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label>text
                    <input
                    type='text'
                    value={this.state.text}
                    onChange={this.handleChange} />
                </label>
                <button type='submit' >Add</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    onAddTask: tasksOperations.addTask,
};

export default connect(null, mapDispatchToProps)(TaskEditor);