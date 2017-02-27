import React from "react";

const Ellipsis = React.createClass({
  interval: null,

  getInitialState() {
    return({
      count: 0
    });
  },

  componentDidMount() {
    this.interval = setInterval(this.updateDots, 500);
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  updateDots() {
    let count = (this.state.count >= 3)? 0 : this.state.count + 1;
    this.setState({count: count});
  },

  render() {
    let dots = ".".repeat(this.state.count);

    return(
      <div>{this.props.children || "Loading"}{dots}</div>
    );
  }
});

module.exports = Ellipsis;
