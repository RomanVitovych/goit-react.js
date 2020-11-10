import React from 'react';
// import withLog from './hoc/withLog';
// import withFetch from './hoc/withFetch';
import withToggle from './hoc/withToggle';

const Posts = props => <h1>В моїх пропсах будуть data, loading і error</h1>;

// export default withLog(Posts);
// export default withFetch('qweqwre')(Posts);
export default withToggle(Posts);