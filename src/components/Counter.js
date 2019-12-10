import React from "react";

export default class Counter extends React.Component {
  state = {
    number: 35
  };

  decrement = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  increment = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  render() {
    const { number } = this.state;
    return (
      <>
        <h2>Stage A</h2>
        <button onClick={this.decrement}>-</button>
        <span>{number}</span>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}
