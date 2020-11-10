import React, { Component } from 'react';

class SearchForm extends Component {
    state = {
        inputValue: '',
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputValue)
        this.setState({inputValue: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit} >
                    <label>
                        Enter search query
                        <input type = 'text' value = {this.state.inputValue} onChange = {this.handleChange} />
                    </label>
                    <button type = 'submit' >Search</button>
                </form>
            </div>
        );
    }
}

export default SearchForm;