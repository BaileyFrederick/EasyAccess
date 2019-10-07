import React, { Component } from "react";
import fire from "./Components/config/fire";
import Login from "./Components/Login";
import Home from "./Components/Home";

class App extends Component {
  constructor() {
    super();

    this.authListener = this.authListener.bind(this);
  }

  state = {
    user: null
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log("testing");
      console.log(user);
      if (user) {
        this.setState({ user });
        //localStorage.setItem("user", user.uid);
        console.log("user getting set");
      } else {
        this.setState({ user: null });
        //localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <div className=""> {this.state.user == null ? <Login /> : <Home />}</div>
    );
  }
}

export default App;
