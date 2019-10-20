import React, { Component } from "react";
import colors from "../colors.js"
import CollegeMatches from "../CollegeMatches";
import DiversityMatchingQuestion from "./DiversityMatchingQuestion.jsx";

class LocationMatchingQuestion extends Component {

state = {};
  
constructor(props){
    super(props)
    this.handleGoBackClick = this.handleGoBackClick.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.state = {isEmptyState: true}
}

handleGoBackClick(e){
    e.preventDefault()
    this.setState({...this.state, goBack: true, isEmptyState: false})    
}

handleNext(e){
    e.preventDefault()
    this.setState({...this.state, isEmptyState: false, isNext: true})    
}

  render() {

    return (
      <div>
        {this.state.isEmptyState && 
          <div>
            <button style={{backgroundColor: colors.blue_easyaccess, color: colors.white_easyaccess}} onClick={this.handleNext}>Rural</button>
            <br/>
            <button style={{backgroundColor: colors.gold_easyaccess}} onClick={this.handleNext}>Suburban</button>
            <br/>
            <button style={{backgroundColor: colors.blue_easyaccess, color: colors.white_easyaccess}} onClick={this.handleNext}>Urban</button>
            <br/>
            <button onClick={this.handleGoBackClick}>Go Back</button>
           </div>}

          {this.state.goBack && <CollegeMatches /> }
          {this.state.isNext && <DiversityMatchingQuestion />}
        
      </div>
    );
  }
}

export default LocationMatchingQuestion;
