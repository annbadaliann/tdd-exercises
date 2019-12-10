import React from "react";
import Counter from "./components/Counter";

class App extends React.Component {
  state = {
    countersCount: 1
  };

  addCounter = () => {
    this.setState({
      countersCount: this.state.countersCount + 1
    });
  };
  render() {
    const counters = [];
    for (let i = 0; i < this.state.countersCount; i++) {
      counters.push(<Counter key={i} />);
    }
    return (
      <div>
        <h3>Test exercises for practicing TDD</h3>
        <h2>Counter</h2>
        <h2>Stage D</h2>
        {counters}
        <button onClick={this.addCounter}>Add new counter</button>
      </div>
    );
  }
}

export default App;
