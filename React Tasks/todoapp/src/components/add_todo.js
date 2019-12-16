import React, { Fragment } from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleinput = this.handleinput.bind(this);
  }

  handleClick() {
    if (this.state.label) {
      const state_label = this.state.label;
      this.setState({ label: "" }, () =>
        this.props.todoAdd({ label: state_label, is_checked: false })
      );
    }
  }

  handleinput(event) {
    this.setState({ label: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <input
          type="text"
          onChange={this.handleinput}
          value={this.state.label}
          placeholder="Add new todo"
        />{" "}
        <button type="button" onClick={this.handleClick}>
          {" "}
          Add{" "}
        </button>
      </Fragment>
    );
  }
}

export default AddTodo;
