import React from 'react'

export default class Counter extends React.Component {
  state = { count: 0 }

  handleClick = () => this.setState(
    ({ count }) => ({ count: ++count })
  )

  render() {
    return (
      <div>
        <h1>Count is {this.state.count}</h1>
        <button onClick={this.handleClick}>Inc</button>
      </div>
    )
  }
}
