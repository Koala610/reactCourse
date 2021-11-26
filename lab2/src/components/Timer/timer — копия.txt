import React from 'react';


export default class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  componentDidMount(){
    console.log('Start');
    this.myInterval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000);
    
  }

  componentDidUpdate(){
    console.log(this.state.count);
  }

  componentWillUnmount(){
    console.log('Finish');
    clearInterval(this.myInterval);
  }

  render() {
    return (
      <React.Fragment>
      {this.state.count}
      </React.Fragment>
    )
  }
}