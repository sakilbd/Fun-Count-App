import React, { Component } from 'react';
import Counter from './Counter';


class Counters extends Component {

    render() {
        return (
            <div> 
                <button onClick={this.props.onReset} 
                className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter => 
                <Counter 
                key={counter.id}
                value={counter.value} 
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
                counter={counter}
                id={counter.id}/> )}

            </div>
           
        
        );
    }
}

export default Counters;