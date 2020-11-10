import React from 'react';
import {NavLink} from 'react-router-dom';
import routes from '../../views/routes';

const Navigation = () => {
    return (
    <ul>
        <li>
            <NavLink to={routes.home} >Home</NavLink>
        </li>
        <li>
            <NavLink to={routes.shows} >Shows</NavLink>
        </li>
    </ul>
    );
};

export default Navigation;