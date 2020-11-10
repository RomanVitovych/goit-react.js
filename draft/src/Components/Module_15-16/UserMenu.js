import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux_15-16/auth';

const UserMenu = ({
    avatar = 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpq',
    name,
    onLogout,
}) => {
    return (
        <div>
            <img src={avatar} alt='' width='32' />
            <span>Welcome {name}</span>
            <button type='button' onClick={onLogout} >Logout</button>
        </div>
    );
};

const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    avatar: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpq',
});

export default connect(mapStateToProps, {onLogout: authOperations.logOut})(UserMenu);