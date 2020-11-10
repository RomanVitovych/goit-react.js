import { lazy } from 'react';

export default [
    {
        path: '/',
        label: 'Home',
        exact: true,
        component: lazy(() => import('./HomeView')),
    },
    {
        path: 'register',
        label: 'Register',
        exact: true,
        component: lazy(() => import('./RegisterView')),
    },
    {
        path: 'login',
        label: 'Login',
        exact: true,
        component: lazy(() => import('./LoginView')),
    },
    {
        path: 'tasks',
        label: 'Tasks',
        exact: true,
        component: lazy(() => import('./TaskerView')),
    },
];