import React, { Component } from 'react';

class Tabs extends Component {

    state = {
        activeIdx: 0,
    }

    shouldComponentUpdate (nextProps, nextState) {
        return nextState.activeIdx !== this.state.activeIdx
    }
 
    setActiveTabIdx = (idx) => {
        this.setState ({
            activeIdx: idx,
        })
    }
 
    render() {
        // console.log('Re-render @ ${Date.now()}');
        const tab = this.props.items[this.state.activeIdx]
        return (
            <div>
                <div>
                    {this.props.items.map((item, idx) => (
                        <button 
                        type = 'button' 
                        key = {item.label} 
                        onClick = {() => this.setActiveTabIdx(idx)} >
                            {item.label}
                        </button>
                    ))}
                </div>
                <div>
                    <h2>{tab.label}</h2>
                    <p>{tab.content}</p>
                </div>
            </div>
        );
    }
}

export default Tabs;