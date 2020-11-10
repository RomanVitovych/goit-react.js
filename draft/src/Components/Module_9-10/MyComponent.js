import React from 'react';
// import withHigherOrderComponent from './hoc/withHigherOrderComponent';
// import withLog from './hoc/withLog';
// import withToggle from './hoc/withToggle';

const MyComponent = props => <p>{JSON.stringify(props, null, 2)}</p>;

// export default withToggle(MyComponent);
export default MyComponent;