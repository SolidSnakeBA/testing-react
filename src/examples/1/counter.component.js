import React from "react";

const increment = ({ count }) => ({ count: ++count });

export default class Counter extends React.Component {
  state = { count: 0 };

  hanldeClick = () => this.setState(increment);

  render() {
    return (
      <div>
        <h1>Count is {this.state.count}</h1>
        <button onClick={this.hanldeClick}>Inc</button>
      </div>
    );
  }
}
