import React, { Component } from 'react';

class Modal extends Component {
    componentDidMount () {
        console.log('Modal componentDidMount');
        window.addEventListener ('keydown', this.handleKeyDown)
    }
    componentWillUnmount () {
        console.log('Modal componentWillUnmount');
        window.removeEventListener ('keydown', this.handleKeyDown)
    }
    handleKeyDown = (e) => {
        console.log('Modal componentDidMount');
        window.addEventListener ('keydown', e => {
            if (e.code === 'Escape') {
                this.props.onClose();
            }
        })
    }

    render() {
        return (
            <div>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default Modal;