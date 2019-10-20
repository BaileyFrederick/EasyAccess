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
      console.log(user);
      if (user) {
        this.setState({ user });
        console.log("user getting set");
      } else {
        this.setState({ user: null });
      }
    });
  }

  checkAccountCreated(){
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
       this.setState({...this.state, userInfo: JSON.parse(xhr.response)})
       //console.log("user info = " + this.state.userInfo)
    })
    xhr.open('POST', 'http://localhost:3001/user', true)
    xhr.send(JSON.stringify(fire.auth().currentUser.uid))
    if(this.state.userInfo === null) return false
    else return true
  }

  render() {
    return (
      <div className=""> {this.state.user == null ? <Login /> : <Home checkAccountCreated={this.checkAccountCreated()} />}</div>
    );
  }
}

export default App;
