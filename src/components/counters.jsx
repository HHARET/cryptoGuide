import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 6 }, { id: 3, value: 1 }]
  };
  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
