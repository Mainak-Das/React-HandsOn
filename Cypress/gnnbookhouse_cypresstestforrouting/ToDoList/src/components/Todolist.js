import React, { Component } from 'react';

const styles = {
	form: {
		backgroundColor: 'rgb(247, 247, 181)',
		textAlign: 'center'
	},
	h1: {
		paddingTop: '50px',
		textAlign: 'center',
		color: '#ff0000'
	},
	h4: {
		color: '#022f3a',
		fontFamily: 'verdana',
		fontStyle: 'italic'
	},
	h3: {
		paddingTop: '50px',
		color: '#022f3a'
	}
};

class Todolist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			items: [],
			message: ''
		};
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ text: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.text.length > 0) {
			var nextItems = this.state.items.concat([this.state.text]);
			var nextText = '';
			this.setState({ items: nextItems, text: nextText });
		} else {
			this.setState({ message: 'Please enter a valid todo item' });
		}
	}

	render() {
		return (
			<div>
				<h1 style={styles.h1}>What are the upcoming schedule</h1>
				<h4 style={styles.h4}>
					<ul>
						<li>Customize Workflows.</li>
						<li>Keep Projects on Track.</li>
						<li>Create and Share Plans.</li>
						<li>Set Dependencies.</li>
					</ul>
				</h4>
				<form style={styles.form}>
					<input
						type="text"
						id="input"
						placeholder="Enter your todo here"
						onChange={this.onChange}
						value={this.state.text}
					/>
					<button id="submit" onClick={this.handleSubmit}>
						{'Add #' + (this.state.items.length + 1)}
					</button>
				</form>
				<Print items={this.state.items} />
				{this.state.message && <div>{this.state.message}</div>}
				<h3 style={styles.h3}>Makes it easier for a team to plan their work by using online to-do lists.</h3>
			</div>
		);
	}
}

class Print extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		var data = e.target.childNodes[0].data;
		var array = this.props.items;
		array.splice(array.indexOf(data), 1);
		this.setState({ items: array });
	}

	render() {
		return (
			<div onClick={this.handleClick}>
				<ul>
					{this.props.items.map((item, i) => (
						<li id={i} key={i}>{item}</li>
					))}
				</ul>
			</div>
		);
	}
}

export { Print };
export default Todolist;