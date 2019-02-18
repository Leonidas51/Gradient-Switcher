import React, {Component} from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="controls__btn" onClick={this.props.onClick}>
        {this.props.value}
      </a>
    )
  }
}

export default Button;