import React, { Component } from "react";
import InputField from "./InputField";

class LoginButton extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = product => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Login
        </button>
      </div>
    );
  }
}

export default LoginButton;
