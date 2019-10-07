import React, { Component } from "react";
//import InputField from "./InputField";
import fire from "./config/fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleCreateAccountClick = this.handleCreateAccountClick.bind(this);
    this.changeInputHandlerUser = this.changeInputHandlerUser.bind(this);
    this.changeInputHandlerPass = this.changeInputHandlerPass.bind(this);
  }

  state = {
    buttonLogin: [{ id: 1, value: "test" }],
    buttonCreateAccount: [{ id: 1, value: "test" }],
    inputuser: "",
    inputpass: ""
  };

  // handleLoginClick = loginButtonID => {
  //   const buttonLogin = this.state.buttonLogin.filter(function(c) {
  //     return c.id !== loginButtonID;
  //   });
  //   const fieldInputLogin = [
  //     { id: 1, value: "test" },
  //     { id: 2, value: "test" }
  //   ];
  //   const buttonCreateAccount = [];
  //   this.setState({ buttonLogin });
  //   this.setState({ buttonCreateAccount });
  //   this.setState({ fieldInputLogin });
  // };

  handleLoginClick(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.inputuser, this.state.inputpass)
      .then(u => {
        console.log("sucessful login!!!");
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleCreateAccountClick(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(
        this.state.inputuser,
        this.state.inputpass
      )
      .then(u => {
        console.log("sucessful creation of account!!!");
      })
      .catch(error => {
        console.log(error);
      });
  }

  // handleCreateAccountClick = createButtonID => {
  //   const buttonCreateAccount = this.state.buttonCreateAccount.filter(function(
  //     c
  //   ) {
  //     return c.id !== createButtonID;
  //   });
  //   const fieldInputCreateAccount = [
  //     { id: 1, value: "test" },
  //     { id: 2, value: "test" }
  //   ];
  //   const buttonLogin = [];
  //   this.setState({ buttonLogin });
  //   this.setState({ fieldInputCreateAccount });
  //   this.setState({ buttonCreateAccount });
  // };

  changeInputHandlerUser = event => {
    this.setState({ inputuser: event.target.value });
  };

  changeInputHandlerPass = event => {
    this.setState({ inputpass: event.target.value });
  };

  //write this method once create account input fields are filled in by user
  handleInputCreateAccountClick = counterID => {};

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.inputuser}
            onChange={this.changeInputHandlerUser}
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={this.state.inputpass}
            onChange={this.changeInputHandlerPass}
          ></input>
        </div>
        <button onClick={this.handleLoginClick}>Login</button>
        <button onClick={this.handleCreateAccountClick}>Create Account</button>
      </div>
    );
  }
}

export default Login;
