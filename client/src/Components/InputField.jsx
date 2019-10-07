import React, { Component } from "react";

class InputField extends Component {
  state = {
    input: this.props.fieldInputLogin.value
  };

  changeInputHandler = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.changeInputHandler}
        ></input>
      </div>
    );
  }
}

export default InputField;
