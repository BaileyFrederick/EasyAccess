import React, { Component } from "react";

class CreateAccountButton extends Component {
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
            onClick={() => this.props.onCreateAccount(this.props.id)}
            className="btn btn-danger btn-sm m-2"
          >
            CreateAccount
          </button>
        </div>
      </div>
    );
  }
}

export default CreateAccountButton;
