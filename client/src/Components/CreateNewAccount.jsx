import React, { Component } from "react";
import InputField from "./InputField";
import fire from "./config/fire";
import MainSelection from "./MainSelection";

class CreateNewAccount extends Component {
  state = { isEmptyState: true };

  componentDidMount() {
    this.getData();
  }

  constructor(props) {
    super(props);
    this.state = {
      isEmptyState: true,
      hasUserInfo: false,
      userInfo: null,
      count: 0,
      doneInputting: false
    };
    this.handleAccountInfoClick = this.handleAccountInfoClick.bind(this);
  }

  getData() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      this.setState({ ...this.state, userInfo: JSON.parse(xhr.response) });
      console.log("user info = " + this.state.userInfo);
    });
    xhr.open("POST", "http://localhost:3001/user", true);
    xhr.send(JSON.stringify(fire.auth().currentUser.uid));
  }

  handleAccountInfoClick(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAccountInfoState: true
    });
    this.getData();
  }

  testing = () => {
    console.log(this.state.userInfo);
  };

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  changeToHome = () => {
    this.setState({ doneInputting: true });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.doneInputting === false ? (
            <div>
              <div>
                {this.state.count === 0 ? (
                  <div>
                    <div>Fill out first section</div>
                    <InputField value="name"></InputField>
                    <InputField></InputField>
                    <InputField></InputField>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <div>
                {this.state.count === 1 ? (
                  <div>
                    <div>Fill out second section</div>
                    <InputField></InputField>
                    <InputField></InputField>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <div>
                {this.state.count === 2 ? (
                  <div>
                    <div>Fill out third section</div>
                    <InputField></InputField>
                    <button onClick={this.changeToHome}> Done</button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <div>
                {this.state.count === 2 ? (
                  <div>
                    <div> </div>
                  </div>
                ) : (
                  <button onClick={this.increaseCount}>Next</button>
                )}
              </div>

              <div></div>
              <button onClick={this.handleAccountInfoClick}>
                Testing HTTP Request
              </button>
              <button onClick={this.testing}>
                Testing HTTP Request Output Variables
              </button>
              <button onClick={this.resetCount}>Reset Count</button>
            </div>
          ) : (
            <MainSelection />
          )}
        </div>
      </div>
    );
  }
}

export default CreateNewAccount;
