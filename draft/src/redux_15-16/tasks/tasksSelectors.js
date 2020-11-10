import { createSelector } from '@reduxjs/toolkit'

const getLoading = state => state.tasks.loading;

const getTasks = state => state.tasks.items;

const getFilter = state => state.tasks.filter;

//  мемоізація
const getVisibleTasks = createSelector([getTasks, getFilter], (tasks, filter) => {
    return tasks.filter(task => 
        task.description.toLowerCase().includes(filter.toLowerCase()))
});

// const getVisibleTasks = state => {
//     const tasks = getTasks(state);
//     const filter = getFilter(state).toLowerCase();

//     return tasks.filter(task => 
//         task.text.toLowerCase().includes(filter));
// };

// мемоізація
const getTaskById = createSelector(
    [(_, taskId) => taskId, getTasks], 
    (taskId, tasks) => tasks.find(task => task.id === taskId));

// const getTaskById = (state, taskId) => {
//     const tasks = getTasks(state);
//     return tasks.find(task => task.id === taskId);
// };

export default {
    getLoading,
    getFilter,
    getVisibleTasks,
    getTaskById,
};