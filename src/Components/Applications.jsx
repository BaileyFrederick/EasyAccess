import React, { Component } from "react";
import AccountInfo from "./AccountInfo";
import fire from "./config/fire";
import { userInfo } from "os";
import colors from "./colors.js" 
import MainSelection from "./MainSelection"

class Applications extends Component {
  state = { isEmptyState: true};

  componentDidMount(){
    //this.getData()
  }

  constructor(props){
    super(props);
    this.state = { isEmptyState: true, hasUserInfo: false, userInfo: null}
    this.handleGoBackClick = this.handleGoBackClick.bind(this);
  }

//   getData(){
//     var xhr = new XMLHttpRequest()
//     xhr.addEventListener('load', () => {
//        this.setState({...this.state, userInfo: JSON.parse(xhr.response)})
//        console.log("user info = " + this.state.userInfo)
//        console.log(JSON.parse(xhr.response))
//     })
//     xhr.open('POST', 'http://localhost:3001/user', true)
//     xhr.send(JSON.stringify(fire.auth().currentUser.uid))
//   }

  handleGoBackClick(e){
    e.preventDefault()
    this.setState({...this.state, goBack: true, isEmptyState: false})    
  }

  //look at page routing
  render() {
    return (
      <div>
          {this.state.isEmptyState &&
          <div>
        <header>Start applying to colleges!</header>
        <br></br>
        <a href="https://www.commonapp.org/" target="_blank">Common App</a>
        <br></br>
        <br></br>
        <button onClick={this.handleGoBackClick}>Back</button>
        </div>}
        {this.state.goBack && <MainSelection /> }
      </div>  
    );
  }
}

export default Applications;
