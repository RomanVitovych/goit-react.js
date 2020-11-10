import {combineReducers} from 'redux'
// import actionTypes from './tasksActionTypes';
import {createReducer} from '@reduxjs/toolkit';
import tasksActions from './tasksActions';

const addTask = (state, action) => {
    return [...state, action.payload.task];
};
const removeTask = (state, action) => {
    return state.filter(task => task.id !== action.payload);
};
const toggleCompleted = (state, action) => {
    return state.map(task => {
        return task.id === action.payload
        ? {...task, completed: !task.completed}
        : task});
};

const items = createReducer([], {
    [tasksActions.addTask]: addTask,
    [tasksActions.removeTask]: removeTask,
    [tasksActions.toggleCompleted]: toggleCompleted,
});

// const items = (state = [], {type, payload}) => {
//     switch(type) {
//         // case actionTypes.ADD_TASK:
//         case tasksActions.addTask.type: 
//             return [...state, payload.task];

//         // case actionTypes.REMOVE_TASK:
//         case tasksActions.removeTask.type:
//             return state.filter(task => task.id !== payload.taskId);
            
//         // case actionTypes.TOGGLE_COMPLETED:
//         case tasksActions.toggleCompleted.type:
//             return state.map(task => {
//                 return task.id === payload
//                 ? {...task, completed: !task.completed}
//                 : task});    

//         default:
//             return state;
//     }
// }; 

const filter = createReducer('', {
    [tasksActions.changeFilter]: (state, action) => action.payload,
});

// const filter = (state = '', {type, payload}) => {
//     switch(type) {
//         // case actionTypes.CHANGE_FILTER:
//         case tasksActions.changeFilter.type:
//             return payload.filter;

//         default:
//             return state;
//     }
// };

export default combineReducers({
    items,
    filter,
});




// state = {
//     tasks: [],
//     filter: '',
// };

// addTask = (text) => {
//     const task = {
//         id: uuid,
//         text,
//         completed: false,
//     }
//     this.setState(prevState => {
//         return {
//             tasks: [...prevState.tasks, task],
//         };
//     });
// };

// removeTask = (taskId) => {
//     this.setState(prevState => {
//         return {
//             tasks: prevState.tasks.filter(({id}) => id !== taskId),
//         };
//     });
// };

// updateCompleted = (taskId) => {
//     this.setState(prevState => ({
//         tasks: prevState.tasks.map(task => 
//             task.id === taskId ? {...task, completed: !task.completed} : task,
//             ),
//     }));
// };

// changeFilter = (filter) => {
//     this.setState({filter});
// };


