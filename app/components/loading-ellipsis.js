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
    let dotClass = this.props.showColor? "dots" : "";

    return(
      <span className="loading-ellipsis">
        {this.props.children || "Loading"}
        <span className="dot-holder">
          <span className={dotClass}>
            {dots}
          </span>
        </span>
      </span>
    );
  }
});

module.exports = Ellipsis;
