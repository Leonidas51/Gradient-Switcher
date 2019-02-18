import React, {Component} from "react";
import Checkbox from "./../controls/Checkbox";

class CssPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        display: "none"
      }
    };

    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
  }

  onChangeCheckbox(e) {
    this.setState({
      style: {
        display: e.target.checked ? "block" : "none"
      }
    })
  }

  render() {
    return (
      <div className="settings__showCss">
        <Checkbox onChange={this.onChangeCheckbox} value="Show Css" />

        <div className="settings__showCss__cssInfo" style={this.state.style}>
          background: {this.props.cssData.background}
        </div>
      </div>
    )
  }
}

export default CssPanel;