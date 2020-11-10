import React from 'react';
import Timer from './Module_11-12/Timer';
import StepSelector from './Module_11-12/StepSelector';

const stepOptions = [5, 10, 15, 20, 25, 30]

const App = () => {
    return (
        <div>
            <Timer />
            <StepSelector options={stepOptions} />
        </div>
    );
};

export default App;