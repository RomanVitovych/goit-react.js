import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux_15-16/auth';

class LoginView extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({[name]: value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onLogin({...this.state});
        this.setState({email:'', password:''});
    };

    render() {
        const {email, password} = this.state;
        return (
            <div>
                <h2>Login page</h2>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Email
                        <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange} />
                    </label>
                    <label>
                        <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange} />
                    </label>
                </form>
            </div>
        );
    }
};

export default connect(null, {onLogin: authOperations.logIn})(LoginView);