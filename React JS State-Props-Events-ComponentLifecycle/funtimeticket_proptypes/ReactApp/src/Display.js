import React, { Component } from 'react';
import './Display.css';
import PropTypes from 'prop-types';

class Display extends Component {

 //IMPLEMENT YOUR CODE   
    
   render(){
      const { movieName, certificate, releasedYear } = this.props;

      return (
            <div>
                <h1>FunTimeTicket</h1>
                <h2>Movie Name</h2>
                <p>{movieName}</p>
                <h2>Certificate</h2>
                <p>{certificate}</p>
                <h2>Released Year</h2>
                <p>{releasedYear}</p>
            </div>
        );
   }
    
}

//IMPLEMENT PROPTYPES
Display.propTypes = {
   movieName: PropTypes.string.isRequired,
   certificate: PropTypes.oneOf(['U', 'A']).isRequired,
   releasedYear: PropTypes.number.isRequired,
};


export default Display;