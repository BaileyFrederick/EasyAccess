import React, { Component } from "react";
import fire from "./config/fire";
import MainSelection from "./MainSelection";
import colors from "./colors.js"

class AccountInfo extends Component {

state = {};
  
constructor(props){
    super(props)
    this.handleGoBackClick = this.handleGoBackClick.bind(this)
    this.handleUpdateInfoClick = this.handleUpdateInfoClick.bind(this)
    this.handleSaveInfoClick = this.handleSaveInfoClick.bind(this)
    this.state = {isAccountInfo: true}
}

handleGoBackClick(e){
    e.preventDefault()
    this.setState({...this.state, goBack: true, isAccountInfo: false})    
}

handleSaveInfoClick(e){
    e.preventDefault()
    this.setState({...this.state, updateInfo: false, isAccountInfo: true})    
}

handleUpdateInfoClick(e){
    e.preventDefault()
    this.setState({...this.state, updateInfo: true, isAccountInfo: false})    
}

  render() {
    //console.log(this.props.userInfo)
    const name = this.props.userInfo ? this.props.userInfo.Name : "No Name Entered Yet (Please Enter)"
    const gradYear = this.props.userInfo ? this.props.userInfo.GraduationYear : "No Graduation Year Entered Yet (Please Enter)"
    const unweightedGPA = this.props.userInfo ? this.props.userInfo.UnweightedGPA : "No Unweighted GPA Entered Yet (Please Enter)"
    const weightedGPA = this.props.userInfo ? this.props.userInfo.WeightedGPA : "No Weighted GPA Entered Yet (Please Enter)"
    const act = this.props.userInfo ? this.props.userInfo.ACT : "No ACT Score Entered Yet (Please Enter)"
    const sat = this.props.userInfo ? this.props.userInfo.SAT : "No SAT Score Entered Yet (Please Enter)"
    const size = this.props.userInfo ? this.props.userInfo.Size : "No Size Entered Yet (Please Enter)"
    const location = this.props.userInfo ? this.props.userInfo.Location : "No Location Entered Yet (Please Enter)"
    const diversity = this.props.userInfo ? this.props.userInfo.Diversity : "No Size Entered Yet (Please Enter)"
    const majors = this.props.userInfo ? this.props.userInfo.Majors : ["No Majors Entered (Please Enter)"]

    return (
      <div>
        {this.state.isAccountInfo && 
          <div style={{backgroundColor: colors.gold_easyaccess, width: '300px'}}>
            <header>Name: {name}</header>
            <header>Grad Year: {gradYear}</header>
            <header>Unweighted GPA: {unweightedGPA}</header>
            <header>Weighted GPA: {weightedGPA}</header>
            <header>ACT: {act}</header>
            <header>SAT: {sat}</header>

            <header>Size: {size}</header>
            <header>Location: {location}</header>
            <header>Diversity: {diversity}</header>
            <header>Majors: </header>
            {majors.map(function(name,index) {
                return <div key={index}><p>{name}</p> </div>
            })}
            <button onClick={this.handleGoBackClick}>Back</button>
            <button onClick={this.handleUpdateInfoClick}>Update Personal Information</button>
           </div>}

          {this.state.goBack && <MainSelection /> }

          {this.state.updateInfo && 
            <div>
              <form>
                <header> Name: </header>
                <input type = "text" value={name} />
                <header>Grad Year: </header>
                <input type = "text" value={gradYear} />
                <header>Unweighted GPA: </header>
                <input type = "text" value={unweightedGPA} />
                <header>Weighted GPA: </header>
                <input type = "text" value={weightedGPA} />
                <header>ACT: </header>
                <input type = "text" value={act} />
                <header>SAT: </header>
                <input type = "text" value={sat} />
            </form>
            <button onClick={this.handleSaveInfoClick}>Save</button>
            </div>}
        
      </div>
    );
  }
}

export default AccountInfo;
