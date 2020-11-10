import React from 'react';

const TaskListItem = ({text, completed, onRemove, onToggleCompleted}) => {
    // console.log('TaskListItem re-render ' + text);

    return (
        <li>
            <p>{text}</p>

            <label>
                <input 
                type='checkbox'
                checked={completed}
                onChange={onToggleCompleted} /> 
                Completed               
            </label>

            <section>
                <button
                type='button'
                onClick={onRemove} >
                Delete
                </button>
            </section>
        </li>
    );
};

export default TaskListItem;

