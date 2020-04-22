import React from 'react'

export default class Counter extends React.Component {
  state = { count: 0 }

  // Why defining property as arrow function
  // when method is much nicer? 
  handleClick() {
    this.setState(
      ({ count }) => ({ count: ++count })
    )
  }

  render() {
    return (
      <div>
        <h1>Count is {this.state.count}</h1>
        <button onClick={this.handleClick}>Inc</button>
      </div>
    )
  }
}
