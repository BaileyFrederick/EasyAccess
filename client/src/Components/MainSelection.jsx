import React, { Component } from "react";
import AccountInfo from "./AccountInfo";
import fire from "./config/fire";
import { userInfo } from "os";

class MainSelection extends Component {
  state = { isEmptyState: true};

  componentDidMount(){
    this.getData()
  }

  constructor(props){
    super(props);
    this.state = { isEmptyState: true, hasUserInfo: false, userInfo: null}
    this.handleAccountInfoClick = this.handleAccountInfoClick.bind(this);
  }

  getData(){
    console.log("in get data")
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
       console.log("response text=" + xhr.response) 
       this.setState({...this.state, userInfo: JSON.parse(xhr.response)})
       console.log("user info = " + this.state.userInfo)
       //console.log(this.state.userInfo.)
       //console.log("json response text= " + JSON.parse(xhr.response).Name)
    })
    //this does the same as adding load as an event listener 
    // xhr.onload = function() {
    //   console.log("in on load" + this.responseText)
    // }
    xhr.open('POST', 'http://localhost:3001/user', true)
    //console.log(JSON.stringify(fire.auth().currentUser.uid))
    xhr.send(JSON.stringify(fire.auth().currentUser.uid))
  }

  handleAccountInfoClick(e) {
    e.preventDefault();
    this.setState({...this.state, isEmptyState: false, isAccountInfoState: true})
    this.getData()
    console.log("in account info click")
  }

  //look at page routing
  render() {
    return (
      <div>
        {this.state.isEmptyState &&
        <div>
          <button>College Matches</button>
          <button>Applications</button>
          <button>Affordiability</button>
          <button onClick={this.handleAccountInfoClick}>Account Info</button> 
        </div>
        }
        {this.state.isAccountInfoState && <AccountInfo userInfo={this.state.userInfo}/>}
      </div>
    );
  }
}

export default MainSelection;
