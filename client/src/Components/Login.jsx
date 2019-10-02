import React, { Component } from "react";
import LoginButton from "./LoginButton";
import InputField from "./InputField";

class Login extends Component {
  state = {
    buttonLogin: [{ id: 1, value: 3 }],
    buttonCreateAccount: [{ id: 1, value: 0 }],
    fieldInputLogin: [],
    fieldInputCreateAccount: []
  };

  handleLoginClick = loginButtonID => {
    const buttonLogin = this.state.buttonLogin.filter(function(c) {
      return c.id !== loginButtonID;
    });
    this.setState({ buttonLogin });
  };

  handleCreateAccountClick = counterID => {};

  handleInputLoginClick = counterID => {};

  handleInputCreateAccountClick = counterID => {};

  render() {
    return (
      <div>
        <div>
          {this.state.buttonLogin.map(buttonL => (
            <LoginButton key={buttonL.id} onDelete={this.handleLoginClick} />
          ))}
        </div>
        <div>
          {this.state.buttonCreateAccount.map(buttonC => (
            <LoginButton key={buttonC.id} onDelete={this.handleLoginClick} />
          ))}
        </div>
        <div>
          {this.state.fieldInputLogin.map(inputL => (
            <InputField />
          ))}
        </div>
        <div>
          {this.state.fieldInputCreateAccount.map(inputC => (
            <InputField />
          ))}
        </div>
      </div>
    );
  }
}

export default Login;
