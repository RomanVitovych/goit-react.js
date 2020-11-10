import {createAction} from '@reduxjs/toolkit';
import {uuid} from 'uuidv4';
// import actionTypes from './tasksActionTypes';

const addTask = createAction('tasks/add', text => ({
    payload: {
        task: {
            id: uuid(), 
            text, 
            completed: false,
        },
    },    
}));

// const addTask = (text) => ({
//     type: actionTypes.ADD_TASK,
//     payload: {
//         task: {
//             id: uuid(), 
//             text, 
//             completed: false,
//         },
//     },    
// });

const removeTask = createAction('tasks/remove');

// const removeTask = (taskId) => ({
//     type: actionTypes.REMOVE_TASK,
//     payload: {
//         taskId,
//     },
// });

const toggleCompleted = createAction('tasks/toggleCompleted');

// const toggleCompleted = (taskId) => ({
//     type: actionTypes.TOGGLE_COMPLETED,
//     payload: {
//         taskId,
//     },
// });

const changeFilter = createAction('tasks/changeFilter');

// const changeFilter = (filter) => ({
//     type: actionTypes.CHANGE_FILTER,
//     payload: {
//         filter,
//     },
// });

export default {
    addTask,
    removeTask,
    toggleCompleted,
    changeFilter,
};