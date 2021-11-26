import React from 'react';
import './App.css';
import { render } from 'react-dom';
import Task from "./components/Task";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      max_id: 0
    }
  }


  

  render() {
    
    return (
      <React.Fragment>
        <Task/>
      </React.Fragment>
    )
  }
}
export default App;