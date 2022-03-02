import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
   

    styles={
        
        
    };
   
    render() { 
        console.log(this.props);
        return (
            <div>
                
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary m-2" 
                onClick={()=>this.props.onIncrement(this.props.counter)}
                >Increment</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {/* <ul>
                    {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
                </ul> */}
            </div>
            
        );
    }
    formatCount(){
        const {value}=this.props.counter;
        return value === 0 ? <span>Zero</span> : value;
    }
}
 
export default Counter;