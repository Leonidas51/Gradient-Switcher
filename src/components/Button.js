import React, {Component} from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="controls__btn" onClick={this.props.onClick}>
        I'm Feeling Lucky!
      </a>
    )
  }
}

export default Button;