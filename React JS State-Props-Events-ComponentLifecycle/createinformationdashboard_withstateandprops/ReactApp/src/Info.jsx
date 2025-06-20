import React, { Component } from 'react';
import './style.css';



class Info extends Component {
    //IMPLEMENT YOUR CODE HERE. 
    render() {
        return (
            <div>
                <h2>Hello Client!</h2>
                <h1>Share Market Statistics</h1>
                <HealthCare client={this.props.client} />
                <TeleCom client={this.props.client} />
            </div>
        );
    }
}

class HealthCare extends React.Component{
	//IMPLEMENT YOUR CODE HERE. Declare state variable here
    constructor(props) {
        super(props);
        this.state = {
            stockNotation: props.client.hc_stockNotation,
            quantity: props.client.hc_quantity,
            stockValue: props.client.hc_stockValue,
        };
    }

    render() {
    const totalValue = this.state.quantity * this.state.stockValue;

        return (
            <div>
                <h2>Client's Investment in HealthCare</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Stock Notation</th>
                            <th>Quantity</th>
                            <th>Stock Value</th>
                            <th>Total Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.stockNotation}</td>
                            <td>{this.state.quantity}</td>
                            <td>{this.state.stockValue}</td>
                            <td>{totalValue}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}  


class TeleCom extends React.Component{
	//IMPLEMENT YOUR CODE HERE. Declare state variable here
    constructor(props) {
        super(props);
        this.state = {
            stockNotation: props.client.tc_stockNotation,
            quantity: props.client.tc_quantity,
            stockValue: props.client.tc_stockValue,
        };
    }

    render() {
    const totalValue = this.state.quantity * this.state.stockValue;
    return (
      <div>
        <h2>Client's Investment in TeleCom</h2>
        <table>
          <thead>
            <tr>
              <th>Stock Notation</th>
              <th>Quantity</th>
              <th>Stock Value</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.stockNotation}</td>
              <td>{this.state.quantity}</td>
              <td>{this.state.stockValue}</td>
              <td>{totalValue}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}  
 
export { TeleCom }
export { HealthCare }
export default Info;
