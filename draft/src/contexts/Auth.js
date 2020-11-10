import React, {Component, createContext} from 'react';
import userApi from '../services/user-api9-10';

const Context = createContext();

// const user = {
//     name: 'Mango',
//     email:'mango@gmail.com',
//     avatar: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
// };

class AuthContext extends Component {
    static Consumer = Context.Consumer;

    logIn = () => {
        userApi.fetchUser().then(user => this.setState({user}))        
    };

    logOut = () => {
        this.setState({user: null})
    };

    state = {
        user: null,
        onLogIn: this.logIn,
        onLogOut: this.logOut,
    };


    render() {
        return (
            <Context.Provider 
            value={this.state} >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default AuthContext;