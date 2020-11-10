// import {createStore, combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from './Tasks/tasksReducer';

// const rootReducer = combineReducers({
//     tasks: taskReducer,
// });

// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),   
// );

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

export default store;