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
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
       this.setState({...this.state, userInfo: JSON.parse(xhr.response)})
       console.log("user info = " + this.state.userInfo)
    })
    xhr.open('POST', 'http://localhost:3001/user', true)
    xhr.send(JSON.stringify(fire.auth().currentUser.uid))
  }

  handleAccountInfoClick(e) {
    e.preventDefault();
    this.setState({...this.state, isEmptyState: false, isAccountInfoState: true})
    this.getData()
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
        {this.state.isAccountInfoState && <AccountInfo userInfo={(this.state.userInfo===null) ? null : this.state.userInfo}/>}
      </div>
    );
  }
}

export default MainSelection;
