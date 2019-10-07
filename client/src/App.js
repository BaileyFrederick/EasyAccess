import React, { Component } from "react";
import fire from "./config/fire";
import Login from "./Components/Login";
import Home from "./Components/Home";

class App extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      //<div className=""> {this.state.user == null ? <Home /> : <Login />}</div>
      <Login />
    );
  }
}

export default App;
