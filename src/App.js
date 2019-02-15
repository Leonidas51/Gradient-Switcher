import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./css/app.css";
import ColorInput from "./components/ColorInput";

class App extends React.Component {
  constructor(props) {
    super(props);

    const color_top = this.getRandomColor(),
          color_bottom = this.getRandomColor();

    this.state = {
                  color_top: color_top,
                  color_bottom: color_bottom,
                  style: this.formatGradient(color_top, color_bottom)
                };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const input_name = e.target.name,
          input_value = e.target.value;

    this.setState({
      [input_name]: input_value
    }, () => {
      this.validateColorInput(input_name);
    });
  }

  getRandomColor() {
    return ('#' +
            this.getRandomHex() +
            this.getRandomHex() +
            this.getRandomHex()
          );
  }

  getRandomHex() {
    let hex = Math.round((Math.random() * 255)).toString(16);

    if (hex.length < 2) {
      hex = "0" + hex;
    }

    return hex;
  }

  isValidHex(str) {
    const is_valid_6 = /^#[0-9A-F]{6}$/i,
          is_valid_3 = /^#[0-9A-F]{3}$/i;

    return is_valid_6.test(str) || is_valid_3.test(str);
  }

  formatGradient(col_1, col_2) {
    return {background: 'linear-gradient(' + col_1 + ',' + col_2 + ')'};
  }

  validateColorInput(name) {
    if (this.isValidHex(this.state[name])) {
      this.setState({style: this.formatGradient(this.state.color_top, this.state.color_bottom)});
    }
  }

  render() {
    return (
      <div id="app" style={this.state.style}>
        <div className="controls">
          <h1 className="controls__title">Gradient Switcher</h1>
          <ColorInput name="color_top" value={this.state.color_top} onChange={this.handleInputChange} />
          <ColorInput name="color_bottom" value={this.state.color_bottom} onChange={this.handleInputChange}  />
        </div>
      </div>
    );
  }
}

export default App;