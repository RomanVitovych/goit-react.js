import React from 'react';
import TaskEditor from './Module_13-14/TaskEditor';
import Filter from './Module_13-14/Filter';
import TaskList from './Module_13-14/TaskList';


const App = ({onIncrement, counterValue, isLoadingTasks}) => {
        return (
            <>
                <button 
                type='button' 
                onClick={() => onIncrement(5)} >
                    Counter value: {counterValue}
                </button>
                <hr />
                {isLoadingTasks && <h2>LOADING TASKS...</h2>}
                <TaskEditor />
                <Filter />
                <TaskList />
            </>
        );
};

export default App;

