import React, {Component} from "react";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label>
        <input type="checkbox" onChange={this.props.onChange} />
        <span>{this.props.value}</span>
      </label>
    )
  }
}

export default Checkbox;