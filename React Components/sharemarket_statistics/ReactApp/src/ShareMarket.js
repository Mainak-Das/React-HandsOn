// Please do not make any changes in the given template
import React, { Component } from 'react';
import './Styles.css';


class ShareMarket extends Component {
  
    // IMPLEMENT YOUR CODE HERE
    render(){
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1; // Months are 0-based
        const year = today.getFullYear();
        const formattedDate = `${day}-${month}-${year}`;

        return (
        <div>
            <h1>Share Market Statistics</h1>
            <p>Commodity Report Dated: {formattedDate}</p>
            <HealthCareDB />
        </div>
        );
    }
}

class HealthCareDB extends Component {
  
  // IMPLEMENT YOUR CODE HERE
  render(){
        return(
            <div>
            <h2>Health Care</h2>
            <table border="1" cellPadding="10" style={{ margin: "0 auto" }}>
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
                <td>Health Care</td>
                <td>2500</td>
                <td>100</td>
                <td>2</td>
                </tr>
            </tbody>
            </table>
        </div>
        );
    }
}


export {HealthCareDB};
export default ShareMarket;

