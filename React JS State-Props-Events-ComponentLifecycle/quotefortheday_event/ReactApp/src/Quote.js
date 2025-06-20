// Please do not make any changes in the code template
import React, { Component } from 'react';
import './styles.css';

class Quote extends Component {

   //IMPLEMENT YOUR CODE HERE.
   constructor(props) {
      super(props);
      this.state = {
         likes: 0
      };
   }

   incrementLikes = () => {
      this.setState((prevState) => ({
         likes: prevState.likes + 1
      }));
   };

   render() {
      return (
         <div className="quote-container">
            <p className="quote-text">"If you are tired, learn to rest, Not quit."</p>
            <h5 className="like-button" onClick={this.incrementLikes}>
               Hit here to like: {this.state.likes} likes
            </h5>
         </div>
      );
   }
}

export default Quote;