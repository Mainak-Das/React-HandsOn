import React, { Component } from 'react';
import './stock.css';
class Stock extends Component {

    //IMPLEMENT YOUR CODE HERE. "stockSymbol" , "marketPrice" and "options" are sent through one props data (i.e) as JSON
    render() {
        const { stockSymbol, marketPrice, options } = this.props.stocks;

        return (
            <div className="stock-container">
                <h2 className="heading">Stock Symbol</h2>
                <p className="value">{stockSymbol}</p>

                <h2 className="heading">Market Price</h2>
                <p className="value">{marketPrice}</p>

                <h2 className="heading">Options</h2>
                <ul className="value">
                    {options.map((option, index) => (
                        <li key={index}>{option}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Stock;
