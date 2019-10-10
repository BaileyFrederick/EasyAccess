import React, { Component } from "react";
import fire from "./config/fire";
import MainSelection from "./MainSelection";

class AccountInfo extends Component {

state = {};
  
constructor(props){
    super(props)
    this.handleGoBackClick = this.handleGoBackClick.bind(this)
}

handleGoBackClick(e){
    e.preventDefault()
    this.setState({...this.state, goBack: true})    
}

  render() {
    const name = this.props.userInfo ? this.props.userInfo.Name : "No Name Entered Yet (Please Enter)"
    const gradYear = this.props.userInfo ? this.props.userInfo.GraduationYear : "No Graduation Year Entered Yet (Please Enter)"
    const unweightedGPA = this.props.userInfo ? this.props.userInfo.UnweightedGPA : "No Unweighted GPA Entered Yet (Please Enter)"
    const weightedGPA = this.props.userInfo ? this.props.userInfo.WeightedGPA : "No Weighted GPA Entered Yet (Please Enter)"
    const act = this.props.userInfo ? this.props.userInfo.ACT : "No ACT Score Entered Yet (Please Enter)"
    const sat = this.props.userInfo ? this.props.userInfo.SAT : "No SAT Score Entered Yet (Please Enter)"
    const size = this.props.userInfo ? this.props.userInfo.Size : "No Graduation Year Entered Yet (Please Enter)"
    const location = this.props.userInfo ? this.props.userInfo.Location : "No Location Entered Yet (Please Enter)"
    const diversity = this.props.userInfo ? this.props.userInfo.Diversity : "No Size Entered Yet (Please Enter)"
    const majors = this.props.userInfo ? this.props.userInfo.Majors : "No Majors Entered (Please Enter)"

    return (
      <div>
          {this.state.goBack ? <MainSelection /> : 
          <div>
        <header>Name: {name}</header>
        <header>Grad Year: {gradYear}</header>
        <header>Unweighted GPA: {unweightedGPA}</header>
        <header>Weighted GPA: {weightedGPA}</header>
        <header>ACT: {act}</header>
        <header>SAT: {sat}</header>
        <header>Size: {sat}</header>
        <header>Location: {location}</header>
        <header>Diversity: {diversity}</header>
        <header>Majors: </header>
        {majors.map(function(name,index) {
            return <div><p key={index}>{name}</p> </div>
        })}
        <button onClick={this.handleGoBackClick}>Back</button>
        </div>
          }
      </div>
    );
  }
}

export default AccountInfo;
