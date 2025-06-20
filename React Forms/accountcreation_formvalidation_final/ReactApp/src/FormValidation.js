import React, { Component } from 'react';
import './styles.css';

class FormValidation extends React.Component {
	//IMPLEMENT YOUR CODE HERE.
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			usernameerror: '',
			passworderror: '',
		};
	}

	usernamechangeHandler = (event) => {
		this.setState({ username: event.target.value, usernameerror: '' });
	};

	passwordchangeHandler = (event) => {
		this.setState({ password: event.target.value, passworderror: '' });
	};

	validateForm = (event) => {
		event.preventDefault();
		let valid = true;

		const { username, password } = this.state;

		// Username validation
		if (!username) {
			this.setState({ usernameerror: 'Username cannot be empty' });
			valid = false;
		} else if (!/^[A-Za-z][A-Za-z0-9 ]{6,13}$/.test(username)) {
			this.setState({ usernameerror: 'Username did not meet the required pattern' });
			valid = false;
		}

		// Password validation
		if (!password) {
			this.setState({ passworderror: 'Password cannot be empty' });
			valid = false;
		} else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_$#*])[A-Za-z\d@_$#*]{5,15}$/.test(password)) {
			this.setState({ passworderror: 'Password did not satisfy the required pattern' });
			valid = false;
		}

		if (valid) {
			this.submitForm();
		}
	};

	submitForm = () => {
		alert(`Your account has been created successfully!!! \n Welcome ${this.state.username}`);
	};

	render() {
		return (
			<div>
				<h1>Tekstac-The Learning Platform</h1>
				<h3>SIGN UP</h3>
				<form onSubmit={this.validateForm}>
					<label htmlFor="username">User Name:</label>
					<input type="text" id="username" value={this.state.username} onChange={this.usernamechangeHandler} />
					<span>{this.state.usernameerror}</span>
					<br />

					<label htmlFor="password">Password:</label>
					<input type="password" id="password" value={this.state.password} onChange={this.passwordchangeHandler} />
					<span>{this.state.passworderror}</span>
					<br />

					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}


export default FormValidation;
