import React from 'react';
import {connect} from 'react-redux';
import tasksActions from '../../redux_15-16/tasks/tasksActions';
import tasksSelectors from '../../redux_15-16/tasks/tasksSelectors';

const Filter = ({value, onChangeFilter}) => {
    return (
        <div>
            <input
            type='text'
            value={value}
            onChange={e => onChangeFilter(e.target.value)} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    value: tasksSelectors.getFilter(state), 
});

const mapDispatchToProps = {
    onChangeFilter: tasksActions.changeFilter,
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (Filter);