import React from 'react';

const TaskListItem = ({text, onRemove, comleted, onUpdate}) => (
        <li>
            <p>{text}</p>
            <label>
                <input 
                type='checkbox'
                checked={comleted}
                onChange={onUpdate} />
                Completed
            </label>
            <section>
                <button 
                type="button"
                onClick={onRemove} >
                Delete
                </button>
            </section>
        </li>
);

export default TaskListItem;