import React, { Component } from 'react';
import "./style.css";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: true
    };
  }

  toggleForm = () => {
    this.setState({ isRegistered: !this.state.isRegistered });
  };

  render() {
    return (
      <div>
        <h2 className="mt-3 p-4 bg-warning text-white rounded">WeHost</h2>

        {this.state.isRegistered ? (
          // Login Form
          <div className="card" style={{ width: "40rem", height: "15rem", marginLeft: "300px" }}>
            <div className="card-body">
              <p style={{ color: "orange", fontWeight: "bold" }}>Login to WeHost</p>
              <table style={{ textAlign: "left", width: "500px" }}>
                <tbody>
                  <tr>
                    <td><label htmlFor="userName">Username:</label></td>
                    <td><input type="text" id="userName" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="password">Password:</label></td>
                    <td><input type="password" id="password" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <button className="btn btn-primary w-25" id="log">Login</button>
                      <button className="btn btn-link" id="sign" onClick={this.toggleForm}>Sign Up</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          // Sign Up Form
          <div className="card" style={{ width: "40rem", height: "15rem", marginLeft: "300px" }}>
            <div className="card-body">
              <p style={{ color: "orange", fontWeight: "bold" }}>Sign Up for WeHost</p>
              <table style={{ textAlign: "left", width: "500px" }}>
                <tbody>
                  <tr>
                    <td><label htmlFor="emailId">Email ID:</label></td>
                    <td><input type="text" id="emailId" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="contact">Contact:</label></td>
                    <td><input type="text" id="contact" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="name">Name:</label></td>
                    <td><input type="text" id="name" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="pass">Password:</label></td>
                    <td><input type="password" id="pass" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <button className="form-control btn btn-primary w-25" id="register">Sign Up</button>
                      <button className="btn btn-link" onClick={this.toggleForm}>Back to Login</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}



export default Home;
