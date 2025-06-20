import React, { Component } from 'react';
import './stock.css';
class Stock extends Component {
  	//IMPLEMENT YOUR CODE HERE. "stockName" and "stockShares" is sent through one props data (i.e) as JSON
	render(){
		const { stockName, stockShares } = this.props.dashValues;

	    return (
			<div className="stock-container">
				<h2 className="heading">Stock Name</h2>
				<p className="value">{stockName}</p>
				<h2 className="heading">Stock Shares</h2>
				<p className="value">{stockShares}</p>
			</div>
		);
	}
}

export default Stock;