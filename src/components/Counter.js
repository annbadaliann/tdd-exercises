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

  render() {
    const { number } = this.state;
    return (
      <>
        <h2>Stage B</h2>
        <button onClick={this.decrement}>-</button>
        <span>{number}</span>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}
