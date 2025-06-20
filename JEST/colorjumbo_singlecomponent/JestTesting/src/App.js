import React, { Component } from "react";

const styles = {
  divStyle:{
      margin:'40px'
  },
  redStyle: {
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
    cursor: 'pointer'
  },
  greenStyle: {
    width: '100px',
    height: '100px',
    backgroundColor: 'green',
    cursor: 'pointer',
    color:'#ffffff'
  },
  yellowStyle: {
    width: '100px',
    height: '100px',
    backgroundColor: 'yellow',
    cursor: 'pointer'
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.handleBoxClick = this.handleBoxClick.bind(this);
  }

  handleBoxClick(color) {
    switch (color) {
      case 'red':
        this.setState({ message: "It's a red color" });
        break;
      case 'green':
        this.setState({ message: "It's a green color" });
        break;
      case 'yellow':
        this.setState({ message: "It's a yellow color" });
        break;
      default:
        this.setState({ message: '' });
    }
  }

  render() {
    return (
      <div style={styles.divStyle}>
        <button id="red-box" style={styles.redStyle} onClick={function () { this.handleBoxClick('red'); }.bind(this)}>
          Red
        </button>
        <button id="green-box" style={styles.greenStyle} onClick={function () { this.handleBoxClick('green'); }.bind(this)}>
          Green
        </button>
        <button id="yellow-box" style={styles.yellowStyle} onClick={function () { this.handleBoxClick('yellow'); }.bind(this)}>
          Yellow
        </button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
