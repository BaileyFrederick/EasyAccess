import React, { Component } from "react";

class InputField extends Component {
  state = {
    email: ""
  };

  handleIncrement = product => {
    this.setState({ value: this.state.value + 1 });
  };

  changeEmailHandler = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.email}
          onChange={this.changeEmailHandler}
        ></input>
      </div>
    );
  }
}

export default InputField;
