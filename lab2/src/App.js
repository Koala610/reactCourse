import './App.css';
import React from 'react';
import Timer from './components/Timer/timer';

export default class App extends React.Component {
  state = {
    timerIsShown: false
  }
  changeVisibility = () => {
      this.setState({
        timerIsShown: !this.state.timerIsShown
      })
    }


  render() {

    return (
      <div>
        <h1>Timer: {this.state.timerIsShown && <Timer /> || 0}</h1>
        <button onClick={this.changeVisibility}>Start/Clear timer</button>
      </div>
    )
  }
}
