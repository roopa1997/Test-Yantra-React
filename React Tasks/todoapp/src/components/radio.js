import React from "react";

class RadioButton extends React.Component {
  onChange = e => {
    this.props.onChange && this.props.onChange(e);
  };
  render() {
    const {htmlFor, name, value, checked, label} = this.props;
    return (
      <React.Fragment>
        <input
          type="radio"
          id={htmlFor}
          name={name}
          value={value}
          checked={checked}
          onChange={this.onChange}
        />
        <label htmlFor={htmlFor}>{label}</label>
      </React.Fragment>
    );
  }
}

export default RadioButton;
