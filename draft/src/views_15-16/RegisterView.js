import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux_15-16/auth';

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({[name]: value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onRegister({...this.state});
        this.setState({name:'', email:'', password:''});
    };

    render() {
        const {name, email, password} = this.state;
        return (
            <div>
                <h2>Register page</h2>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Name
                        <input
                        type='text'
                        name='name'
                        value={email}
                        onChange={this.handleChange} />
                    </label>
                    <label>
                        Email
                        <input
                        type='email'
                        name='email'
                        value={name}
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
}

export default connect(nill, {onRegister: authOperations.register})(RegisterView);