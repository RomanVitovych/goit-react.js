import React, { Component } from 'react';

const Subscription = {
    FREE: 'free',
    PRO: 'pro',
    PREMIUM: 'premium'
}

class SignupForm extends Component {
    state = {
        email: '',
        password: '',
        agreed: false,
        subscription: null,
        age: '',
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        // console.log('name:', name);
        // console.log('value:', value);
        this.setState({
            [name]: value
        })
    }

    handleAgreedChange = (e) => {
        this.setState({agreed: e.target.checked})
    }

    handleSubscriptionChange = (e) => {
        this.setState({subscription: e.target.value})
    }

    handleAgeChange = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit!');
    }


    render() {
        const {email, password, agreed, subscription, age} = this.state;
        return (
            <form onSubmit={this.handleSubmit} >
                <label>Email
                    <input 
                    type='email' 
                    value={email} 
                    onChange={this.handleChange}
                    name='email' />
                </label>
                <br />
                <label>Password
                    <input 
                    type='password' 
                    value={password} 
                    onChange={this.handleChange}
                    name='password' />
                </label>
                <br />
                <div role='group' >
                    <label>
                        <input 
                        type='radio' 
                        value={Subscription.FREE}
                        checked={Subscription.FREE === subscription}
                        onChange={this.handleSubscriptionChange} />
                        Free
                    </label>
                    <label>
                        <input 
                        type='radio' 
                        value={Subscription.PRO} 
                        checked={Subscription.PRO === subscription}
                        onChange={this.handleSubscriptionChange} />
                        Pro
                    </label>
                    <label>
                        <input 
                        type='radio' 
                        value={Subscription.PREMIUM} 
                        checked={Subscription.PREMIUM === subscription}
                        onChange={this.handleSubscriptionChange} />
                        Premium
                    </label>
                </div>
                <label>
                    <input 
                    type='checkbox'
                    onChange={this.handleAgreedChange}
                    checked={agreed} />
                    Погоджуюсь
                </label>
                <br />
                <label>
                    Choose your agreed
                    <select 
                    name='age' 
                    value={age} 
                    onChange={this.handleAgeChange}>
                        <option value='' disabled>...</option>
                        <option value='18-25' >18-25</option>
                        <option value='26-35' >26-35</option>
                        <option value='36+' >36+</option>
                    </select>
                </label>
                <br />
                <button 
                    type='submit'
                    disabled={!agreed} >
                    Зареєструватись як {email}
                </button>                 
            </form>
        );
    }
}

export default SignupForm;