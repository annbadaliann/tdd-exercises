import React from "react";
import { getInitialValue } from "./mockupAPI";

export default class Counter extends React.Component {
  state = {
    number: null
  };

  async componentDidMount() {
    const response = await getInitialValue();
    this.setState({
      number: response.data.initialValue
    });
  }

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

  generateRandomNum = () => {
    this.setState({
      number: Math.floor(Math.random() * 1000)
    });
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{number}</span>
        <button onClick={this.increment}>+</button>
        <button onClick={this.generateRandomNum}>Generate random number</button>
      </div>
    );
  }
}
