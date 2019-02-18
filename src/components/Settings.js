import React, {Component} from "react";
import ColorInput from "./controls/ColorInput";
import CssPanel from "./settings/CssPanel";

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="settings">
        <ColorInput name="color_top" value={this.props.color_top} onChange={this.props.onHexInputChange} />
        <ColorInput name="color_bottom" value={this.props.color_bottom} onChange={this.props.onHexInputChange} />

        <CssPanel cssData={this.props.cssData} />
      </div>
    )
  }
}

export default Settings;