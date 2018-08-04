import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.state = {
      count: this.props.counter.value
    };
    this.styles = {
      fontSize: 70,
      fontWeight: "bold"
    };
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  handleDisable() {
    let buttonDecrement = false;
    buttonDecrement = this.state.count === 0 ? true : false;
    return buttonDecrement;
  }
  formatCount() {
    return this.state.count === 0 ? <h1>No Items</h1> : this.state.count;
  }
  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }
  resetCount() {
    this.setState({ count: this.state.count - this.state.count });
  }

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary btn-sm m2">Reset ALL</button>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={this.handleDecrement}
          disabled={this.handleDisable()}
        >
          -
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={this.resetCount}>
          Reset Items
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete Items {this.props.id}
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
