import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import App from './Components/App1-2';
// import App from './Components/App3-4';
// import SignupForm from './Components/Module_3-4/SignupForm';
// import App from './Components/App5-6';
// import App from './Components/App7-8';
// import App from './Components/App9-10';
// import App from './Components/App11-12';
// import App from './Components/App12';
// import App from './Components/App13-14Container';
import App from './Components/App15-16';
// import store from './redux_12/store';
// import store from './redux_13-14/store';
import { store, persistor } from './redux_15-16/store';

// ReactDOM.render(<App />, document.querySelector('#root'));

// ========== Moduel 7-8
// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//     document.getElementById('root')
// );

// ========== Module 11-12
// ReactDOM.render(
//     <Provider store={store} >
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

// ========== Module 15-16
ReactDOM.render(
    <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);








