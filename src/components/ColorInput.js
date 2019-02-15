import React, {Component} from "react";

class ColorInput extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <input className="controls__input"
        type="text"
        placeholder="#000000"
        value={this.props.value}
        onChange={this.props.onChange} 
        name={this.props.name} />
    )
  }
}

export default ColorInput;