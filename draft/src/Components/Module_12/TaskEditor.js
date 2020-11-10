import React, { Component } from 'react';
import {connect} from 'react-redux';
import tasksAction from '../../redux_12/Tasks/tasksActions';

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
    onAddTask: tasksAction.addTask,
};
// Альтернативний варіант
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAddTask: text => dispatch(tasksAction.addTask(text)),
//     };
// };

export default connect(null, mapDispatchToProps)(TaskEditor);