import React from 'react';

const TaskListItem = ({description, completed, onRemove, onToggleCompleted}) => {
    // console.log('TaskListItem re-render ' + text);

    return (
        <li>
            <p>{description}</p>

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