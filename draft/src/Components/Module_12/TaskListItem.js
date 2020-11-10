import React from 'react';

const TaskListItem = ({text, completed, onRemove, onUpdate}) => {
    return (
        <li>
            <p>{text}</p>
            <label
            type='checkbox'
            checked={completed}
            onChange={onUpdate} >
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