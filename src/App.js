import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // Lifecycle
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    );
  }
}

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.setState({
      date: this.filterDate(this.state.date)
    })

    console.log(this.state.date.getHours())
  }

  filterDate(state) {
    const date = state.getHours()
    
    if(date >= 1 && date <= 10 ) {
      return "Good Morning"
    } else if (date >= 11 && date <= 14) {
      return "Good Afternoon"
    } else if (date >= 15 && date <= 21) {
      return "Good Evening"
    } else if (date >= 22 && date <= 24) {
      return "Good Night"
    }
  }

  render() {
    return (
      <div>
        <p>Hello Yugma Dewangga, {this.state.date.toString()}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting />
        <Timer />
      </header>
    </div>
  );
}

export default App;
