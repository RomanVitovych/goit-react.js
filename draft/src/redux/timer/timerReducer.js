import {combineReducers} from 'redux';
import {INCREMENT, DECREMENT, CHANGE_STEP} from './timerTypes';

// const timerReducer = (state = initialValue, action) => {
//     switch(action.type) {
//         case 'timer/increment':
//             return {
//                 ...state,
//                 value: state.value + action.payload.value
//             };
//         case 'timer/decrement':
//             return {
//                 ...state,
//                 value: state.value - action.payload.value
//             };
//         default: 
//             return state; 
//     }
// };

// export default timerReducer;

const valueReducer = (state = 0, {type, payload}) => {
    switch(type) {
        case INCREMENT:
            return state + payload.value;
        
        case DECREMENT:
            return state - payload.value < 0 ? state : state - payload.value;
            
        default:
            return state;
    }
}

const stepReducer = (state = 5, {type, payload}) => {
    switch(type) {
        case CHANGE_STEP:
            return payload.step;
        
        default:
            return state;
    }
};

export default combineReducers ({
    value: valueReducer,
    step: stepReducer,
});

