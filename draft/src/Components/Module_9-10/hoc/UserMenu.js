import React from 'react';
import withAuthContext from './withAuthContext';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    },
};


const UserMenu = ({auth}) => {     
                    {auth.user ? (
                         <div styles={styles.container} >
                             <img src={auth.user.avatar} alt='' width='32' styles={styles.avatar} />
                             <span styles={styles.name} >Welcome {auth.user.name}</span>
                             <button type='button' onClick={auth.onLogOut} >Log out</button>                    
                         </div>
                    ) :
                    <button type='button' onClick={auth.onLogIn} >Log in</button>                    
                    }
};

export default withAuthContext(UserMenu);