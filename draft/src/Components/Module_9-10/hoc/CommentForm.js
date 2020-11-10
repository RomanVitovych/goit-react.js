import React, { Component } from 'react';
import withAuthContext from './withAuthContext';

const styles = {}

class CommentForm extends Component {
    render() {
        return (  
                <form style={styles.form} >
                    <label style={styles.label} >
                        <span style={styles.text} >Name</span>
                        <input type='text' style={styles.input} value={this.props.auth.name} />
                    </label>

                    <label style={styles.label} >
                        <span style={styles.text} >Message</span>
                        <textarea style={styles.input} rews='10' ></textarea>
                    </label>
                </form>                              
        );
    }
}

export default  withAuthContext(CommentForm);