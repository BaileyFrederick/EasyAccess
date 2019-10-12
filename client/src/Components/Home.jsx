import React, { Component } from "react";
import fire from "./config/fire";
import CreateNewAccount from "./CreateNewAccount";
import MainSelection from "./MainSelection";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    //do call to database at beginning to see if created input
    //if so ask user for input
    //do in constructor!!!
    createAccount: false,
    inputFields: []
  };

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <div className="">
          {" "}
          {this.state.createAccount == false ? (
            <CreateNewAccount />
          ) : (
            <MainSelection />
          )}
        </div>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
