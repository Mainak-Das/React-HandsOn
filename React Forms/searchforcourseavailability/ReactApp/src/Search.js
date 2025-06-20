import React, { Component } from 'react';
import './styles.css';
import courselist from './courseList.json';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      submitStatus: true
    };
  }

  displayName = (event) => {
    this.setState({ name: event.target.value });
  };

  searchCourse = (event) => {
    const input = event.target.value;
    const found = courselist.some(item => item.toLowerCase() === input.toLowerCase());
    if (found) {
      this.setState({ course: `course '${input}' is currently available` });
    } else {
      this.setState({ course: `course '${input}' is currently not available` });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitStatus: true });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>EXCEL COACHING CENTER</h1>
        <label>Name</label><br />
        <input type="text" id="name" onChange={this.displayName} /><br /><br />

        <label>Qualification</label><br />
        <select>
          <option>BE/BTech</option>
          <option>ME/MTech</option>
          <option>BCA/MCA</option>
        </select><br /><br />

        <label>Search by Course</label><br />
        <input type="text" id="search" onChange={this.searchCourse} /><br /><br />

        <button type="submit">Submit</button>

        {this.state.submitStatus &&
          <Display
            name={this.state.name}
            course={this.state.course}
            submitStatus={this.state.submitStatus}
          />
        }
      </form>
    );
  }
}

class Display extends Component {
  render() {
    const { name, course, submitStatus } = this.props;
    return (
      <div>
        <p>Welcome to Excel coaching centre!!!</p>
        <p>Hi {name}, {course}</p>
      </div>
    );
  }
}

export { Display };
export default Search;