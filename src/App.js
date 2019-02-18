import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./css/app.css";
import Button from "./components/controls/Button";
import Settings from "./components/Settings";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
                  color_top: "",
                  color_bottom: "",
                  style: {}
                };

    this.handleHexInputChange = this.handleHexInputChange.bind(this);
    this.setRandomColors = this.setRandomColors.bind(this);
  }

  componentDidMount() {
    this.setRandomColors();
  }

  handleHexInputChange(e) {
    const input_name = e.target.name,
          input_value = e.target.value;

    this.setState({
      [input_name]: input_value
    }, () => {
      if (this.validateColorInput(input_name)) {
        this.setState({style: this.formatGradient(this.state.color_top, this.state.color_bottom)});
      }
    });
  }

  setRandomColors() {
    const color_top = this.getRandomColor(),
          color_bottom = this.getRandomColor();

    this.setState({
          color_top: color_top,
          color_bottom: color_bottom,
          style: this.formatGradient(color_top, color_bottom)
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

  formatGradient(col_1, col_2) {
    return {background: 'linear-gradient(' + col_1 + ',' + col_2 + ')'};
  }

  validateColorInput(name) {
    const is_valid_6 = /^#[0-9A-F]{6}$/i,
          is_valid_3 = /^#[0-9A-F]{3}$/i;   

    return is_valid_6.test(this.state[name]) || is_valid_3.test(this.state[name]);
  }

  render() {
    return (
      <div id="app" style={this.state.style}>
        <div className="controls">
          <h1 className="controls__title">Gradient Switcher</h1>

          <Settings 
            cssData={this.state.style}
            color_top={this.state.color_top}
            color_bottom={this.state.color_bottom}
            onHexInputChange={this.handleHexInputChange}
          />

          <div className="controls__btns">
            <Button onClick={this.setRandomColors} value="I'm Feeling Lucky!" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;