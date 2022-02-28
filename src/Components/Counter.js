import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
    state = {
        count:0,
        tags:['tag1','tag2','tag3']
    } ;

    styles={
        
        
    };

    render() { 
        return (
            <div>
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button variant="primary">Increment</button>
                <ul>
                    {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
                </ul>
            </div>
            
        );
    }
    formatCount(){
        const {count}=this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default Counter;