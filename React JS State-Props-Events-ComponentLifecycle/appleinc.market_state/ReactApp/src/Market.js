import React,{ Component } from 'react';
import './Styles.css';
class AppleStock extends Component {
  // IMPLEMENT YOUR CODE HERE
  constructor(props) {
    super(props);
    this.state = {
      name: "Apple Inc. Common Stock",
      lastSale: 138.27,
      netChange: 2.92,
      percentageChange: 2.197
    };
  }

  render() {
    return (
      <div className="stock-container">
        <h2 className="stock-title">{this.state.name}</h2>
        <p className="stock-detail">Last Sale: ${this.state.lastSale}</p>
        <p className="stock-detail">Net Change: {this.state.netChange}</p>
        <p className="stock-detail">Percentage Change: {this.state.percentageChange}%</p>
      </div>
    );
  }
}
//  EXPORT DEFAULT COMPONENT
export default AppleStock;
   