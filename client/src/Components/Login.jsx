import React, { Component } from "react";
import LoginButton from "./LoginButton";
import CreateAccountButton from "./CreateAccountButton";
import InputField from "./InputField";

class Login extends Component {
  state = {
    buttonLogin: [{ id: 1, value: "test" }],
    buttonCreateAccount: [{ id: 1, value: "test" }],
    fieldInputLogin: [],
    fieldInputCreateAccount: []
  };

  handleLoginClick = loginButtonID => {
    const buttonLogin = this.state.buttonLogin.filter(function(c) {
      return c.id !== loginButtonID;
    });
    const fieldInputLogin = [
      { id: 1, value: "test" },
      { id: 2, value: "test" }
    ];
    const buttonCreateAccount = [];
    this.setState({ buttonLogin });
    this.setState({ buttonCreateAccount });
    this.setState({ fieldInputLogin });
  };

  handleCreateAccountClick = createButtonID => {
    const buttonCreateAccount = this.state.buttonCreateAccount.filter(function(
      c
    ) {
      return c.id !== createButtonID;
    });
    const fieldInputCreateAccount = [
      { id: 1, value: "test" },
      { id: 2, value: "test" }
    ];
    const buttonLogin = [];
    this.setState({ buttonLogin });
    this.setState({ fieldInputCreateAccount });
    this.setState({ buttonCreateAccount });
  };

  //write this method once login input fields are filled in by user
  handleInputLoginClick = createButtonID => {};

  //write this method once create account input fields are filled in by user
  handleInputCreateAccountClick = counterID => {};

  render() {
    return (
      <div>
        <div>
          {this.state.buttonLogin.map(buttonLogin => (
            <LoginButton
              key={buttonLogin.id}
              id={buttonLogin.id}
              onLogin={this.handleLoginClick}
            ></LoginButton>
          ))}
        </div>
        <div>
          {this.state.buttonCreateAccount.map(buttonCreateAccount => (
            <CreateAccountButton
              key={buttonCreateAccount.id}
              id={buttonCreateAccount.id}
              onCreateAccount={this.handleCreateAccountClick}
            ></CreateAccountButton>
          ))}
        </div>
        <div>
          {this.state.fieldInputLogin.map(fieldInputLogin => (
            <InputField key={fieldInputLogin.id} />
          ))}
        </div>
        <div>
          {this.state.fieldInputCreateAccount.map(inputC => (
            <InputField />
          ))}
        </div>
        <button type="submit" className="btn btn-primary btn-sm m-2">
          Submit
        </button>
      </div>
    );
  }
}

export default Login;
