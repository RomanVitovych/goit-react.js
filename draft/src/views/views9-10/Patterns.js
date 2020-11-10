import React from 'react';
import MyComponent from '../../Components/Module_9-10/MyComponent';
import Toggler from '../../Components/Module_9-10/Toggler';
import Posts from '../../Components/Module_9-10/Posts';

const Patterns = () => {
    return (
        <>
            <Toggler>
            {({isOpen, onToggle}) => (
                <>
                <button type="button" onClick={onToggle}>
                 {isOpen ? 'Hide' : 'Show'}
                </button>
                
                {isOpen && <MyComponent a='a' b='b' c='c' />}
                </>
                )}
            </Toggler>

            <Toggler>
               {({ isOpen, onToggle }) => (
                   <>
                    <label>
                    <input type="checkbox" checked={isOpen} onChange={onToggle} />
                    {isOpen ? 'Hide' : 'Show'}
                   </label>
                    {isOpen && <p>Etiam feugiat lorem non metus.</p>}
                </>
                )}
            </Toggler>
            {/* <MyComponent a='a' b='b' c='c' /> */}
            {/* <Posts d='d' y='y' /> */}
        </>
    );
};

export default Patterns;