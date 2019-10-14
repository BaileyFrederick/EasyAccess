import React, { Component } from "react";
import AccountInfo from "./AccountInfo";
import fire from "./config/fire";
import { userInfo } from "os";
import colors from "./colors.js"
import MainSelection from "./MainSelection"

class CollegeMatches extends Component {
  state = { isEmptyState: true};

  componentDidMount(){
    this.getData()
  }

  constructor(props){
    super(props);
    this.state = { isEmptyState: true}
    this.handleGoBackClick = this.handleGoBackClick.bind(this)
  }

  getData = () => {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
       this.setState({...this.state, matches: JSON.parse(xhr.response)})
       console.log("user info = " + this.state.matches)
       console.log(JSON.parse(xhr.response))
    })
    xhr.open('GET', 'http://localhost:3001/user', true)
    xhr.send(JSON.stringify(this.props.currentUser))
  }

  handleGoBackClick(e){
    e.preventDefault()
    this.setState({...this.state, goBack: true, isEmptyState: false})    
  }

  //look at page routing
  render() {

    const matches = this.props.userMatches || []

    return (
      <div>
          {this.state.isEmptyState && 
        matches===[] && 
        <div>
            <header>No Matches Yet!</header>
            <button>Find the Perfect Colleges for You!</button>
        </div>}
        {this.state.isEmptyState && matches!==[] &&
        matches.map(function(name,index){
            return <div key={index}></div>
        })}
        {this.state.isEmptyState && <button onClick={this.handleGoBackClick}>Back</button>}
        {this.state.goBack && <MainSelection /> }
      </div>
    );
  }
}

export default CollegeMatches;
