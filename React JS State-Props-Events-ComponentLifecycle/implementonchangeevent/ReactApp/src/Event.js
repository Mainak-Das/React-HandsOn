// Please do not make any changes in the given code template
import React, { Component } from 'react';
import './styles.css';


class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: ''
        };
    }

    handleChange = (event) => {
        this.setState({ studentName: event.target.value });
    };

    //IMPLEMENT YOUR CODE HERE. 
   render(){
       return (
           <div>
               <h1>Mind Academy</h1>
               <input
                   type="text"
                   placeholder="Enter your name"
                   onChange={this.handleChange}
               />
               <h2>Welcome {this.state.studentName}</h2>
           </div>
       );
	}
}

export default Event;
