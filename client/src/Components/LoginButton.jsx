import React, { Component } from "react";

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
        <div>
          <button
            onClick={() => this.props.onLogin(this.props.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginButton;
