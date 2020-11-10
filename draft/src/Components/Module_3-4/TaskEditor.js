import React, {Component} from 'react';

class TaskEditor extends Component {
    state = {
        text: '',
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddTask(this.state.text)
        this.setState ({text: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label>Text
                    <input 
                    type='text' 
                    value={this.state.text}
                    onChange={this.handleChange} />
                </label>
                <button type='submit' >Додати</button>
            </form>
        );
    }
}

export default TaskEditor;



// const TaskEditor = ({onAddTask}) => {
//     return (
//         <div>
//             <button type='button' onClick={onAddTask}>
//             Add task
//             </button>
//     </div>       
//     );
// };

// export default TaskEditor;


       