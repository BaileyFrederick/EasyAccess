import React, { Component } from "react";
import AccountInfo from "./AccountInfo";
import fire from "./config/fire";
import { userInfo } from "os";
import colors from "./colors.js"
import CollegeMatches from "./CollegeMatches";
import Applications from "./Applications"
import Affordability from "./Affordability";

class MainSelection extends Component {
  state = { isEmptyState: true};

  componentDidMount(){
    this.getData()
  }

  constructor(props){
    super(props);
    this.state = { isEmptyState: true, hasUserInfo: false, userInfo: null}
    this.handleAccountInfoClick = this.handleAccountInfoClick.bind(this)
    this.handleApplicationsClick = this.handleApplicationsClick.bind(this)
    this.handleCollegeMatchesClick = this.handleCollegeMatchesClick.bind(this)
    this.handleAffordabilityClick = this.handleAffordabilityClick.bind(this)
  }

  getData(){
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
       this.setState({...this.state, userInfo: JSON.parse(xhr.response)})
       console.log("user info = " + this.state.userInfo)
       console.log(JSON.parse(xhr.response))
    })
    xhr.open('POST', 'http://localhost:3001/user', true)
    xhr.send(JSON.stringify(fire.auth().currentUser.uid))
  }

  handleAccountInfoClick(e) {
    e.preventDefault();
    this.setState({...this.state, isEmptyState: false, isAccountInfoState: true})
    this.getData()
  }

  handleAffordabilityClick(e) {
    e.preventDefault();
    this.setState({...this.state, isEmptyState: false, isAffordabilityState: true})
    this.getData()
  }

  handleApplicationsClick(e) {
    e.preventDefault();
    this.setState({...this.state, isEmptyState: false, isApplicationsState: true})
    //this.getData()
  }

  handleCollegeMatchesClick(e) {
    e.preventDefault();
    this.setState({...this.state, isEmptyState: false, isCollegeMatchesState: true})
    this.getData()
  }

  //look at page routing
  render() {
    return (
      <div>
        {this.state.isEmptyState &&
        <div style = {{alignContent: 'middle'}}>
          <button style = {{backgroundColor: colors.blue_easyaccess, color: colors.white_easyaccess}}
          onClick={this.handleCollegeMatchesClick}>College Matches</button>
          <br></br>
          <br></br>
          <button style = {{backgroundColor: colors.gold_easyaccess}} onClick={this.handleApplicationsClick}>Applications</button>
          <br></br>
          <br></br>
          <button style = {{backgroundColor: colors.blue_easyaccess, color: colors.white_easyaccess}} onClick={this.handleAffordabilityClick}>Affordability</button>
          <br></br>
          <br></br>
          <button style = {{backgroundColor: colors.gold_easyaccess}} onClick={this.handleAccountInfoClick}>Account Info</button> 
          <br></br>
          <br></br>
        </div>
        }
        {this.state.isAccountInfoState && <AccountInfo userInfo={(this.state.userInfo===null) ? null : this.state.userInfo}/>}
        {this.state.isAffordabilityState && <Affordability />}
        {this.state.isApplicationsState && <Applications />}
        {this.state.isCollegeMatchesState && <CollegeMatches currentUser={(this.state.userInfo===null) ? '' : this.state.userInfo.UID}/>}
      </div>
    );
  }
}

export default MainSelection;
