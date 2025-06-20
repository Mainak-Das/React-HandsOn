// Please do not make any changes in the given template

import React, { Component } from 'react';
import './Styles.css';


const ShareMarket=()=> {
  // IMPLEMENT YOUR CODE HERE
  const today = new Date();
  const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

  return (
    <div>
      <h1>Share Market Statistics</h1>
      <h3>Commodity Report Dated:{formattedDate}</h3>
      <Telecom />
    </div>
  );  
}

class Telecom extends Component {
  
  // IMPLEMENT YOUR CODE HERE
  render() {
    const commodity = 'Telecom';
    const price = 3000;
    const change = 200;
    const percentage = 3;

    return (
      <div>
        <table border="1" cellPadding="10" align="center">
          <thead>
            <tr>
              <th>Commodity</th>
              <th>Price</th>
              <th>Change</th>
              <th>Change %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{commodity}</td>
              <td>{price}</td>
              <td>{change}</td>
              <td>{percentage}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
}

export {Telecom};
export default ShareMarket;