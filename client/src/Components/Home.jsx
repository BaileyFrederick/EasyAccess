import React, { Component } from "react";
import fire from "./config/fire";

class Home extends Component {
  state = {};

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <div>Home</div>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
