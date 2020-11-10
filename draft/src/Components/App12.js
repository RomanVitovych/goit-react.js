import React from 'react';
// import Layout from './Module_12/Layout';
import Filter from './Module_12/Filter';
import TaskEditor from './Module_12/TaskEditor';
import TaskList from './Module_12/TaskList';

const App = () => {
    return (
        <div>
           <TaskEditor />
           <Filter />
           <TaskList />
       </div>
    );
}

export default App;