import React, { Component } from "react";
import AccountInfo from "./AccountInfo";
import fire from "./config/fire";
import { userInfo } from "os";
import colors from "./colors.js"
import MainSelection from "./MainSelection"
import SizeMatchingQuestion from "./MatchingQuestions/SizeMatchingQuestion";

class CollegeMatches extends Component {
  state = { isEmptyState: true};

  componentDidMount(){
    //this.getData()
  }

  constructor(props){
    super(props);
    this.state = { isEmptyState: true, matches: [], inMatches: true }
    this.handleGoBackClick = this.handleGoBackClick.bind(this)
    this.handleFindMatchesClick = this.handleFindMatchesClick.bind(this)
    this.getMatchData()
  }

  getMatchData() {
    console.log("in match get data")
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
       this.setState({...this.state, matches: JSON.parse(xhr.response)})
       console.log("match info = " + this.state.matches[0])
       console.log(JSON.parse(xhr.response))
    })
    xhr.open('GET', 'http://localhost:3001/colleges', true)
    // xhr.onload = function () {
    //    this.setState({...this.state, matches: xhr.response})
    //    console.log("match info = " + this.state.matches)
    //    console.log(JSON.parse(xhr.response))
    // }
    console.log("uid = " + JSON.stringify(this.props.currentUser))
    //xhr.send(this.props.currentUser)
    xhr.send()
  }

  handleGoBackClick(e){
    e.preventDefault()
    this.setState({...this.state, goBack: true, isEmptyState: false, inMatches: false})    
  }

  handleFindMatchesClick(e){
    e.preventDefault()
    this.setState({...this.state, findMatches: true, isEmptyState: false})    
  }

  //look at page routing
  render() {

    const matches = this.state.matches || []
    const foundMatches = this.props.foundMatches || false
    //console.log("matchesFound = " + matchesFound)

    return (
      <div>
          {this.state.isEmptyState && !foundMatches &&
        <div>
            <header>No Matches Yet!</header>
            <button style = {{backgroundColor: colors.blue_easyaccess, color: colors.white_easyaccess}} onClick={this.handleFindMatchesClick}
            >Find the Perfect Colleges for You!</button>
            <br></br>
            <br></br>
        </div>}
        {this.state.isEmptyState && matches!==[] &&
        matches.map(function(name,index){
            return <div key={index}></div>
        })}
        {this.state.goBack && <MainSelection /> }
        {this.state.findMatches && <SizeMatchingQuestion />}
        {foundMatches && this.state.inMatches &&
        <div>
            <header>Here are your matches!</header>
            <br></br>
            {matches.map(function(name,index)
            {
                return <div key={index}>
                    <p>{name.Name}</p>
                    </div>
            })}
        </div>}
        {this.state.isEmptyState && <button onClick={this.handleGoBackClick}>Back</button>}
      </div>
    );
  }
}

export default CollegeMatches;
