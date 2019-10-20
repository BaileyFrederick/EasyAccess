import React, { Component } from "react";
import colors from "../colors.js"
import CollegeMatches from "../CollegeMatches";
import MajorsMatchingQuestion from "./MajorsMatchingQuestion"
import LocationMatchingQuestion from "./LocationMatchingQuestion.jsx";

class DiversityMatchingQuestion extends Component {

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
            <button style={{backgroundColor: colors.blue_easyaccess, color: colors.white_easyaccess}} onClick={this.handleNext}>A Little (15%)</button>
            <br/>
            <button style={{backgroundColor: colors.gold_easyaccess}} onClick={this.handleNext}>Somewhat (45%)</button>
            <br/>
            <button style={{backgroundColor: colors.blue_easyaccess, color: colors.white_easyaccess}} onClick={this.handleNext}>Mostly(70%)</button>
            <br/>
            <button onClick={this.handleGoBackClick}>Go Back</button>
           </div>}

          {this.state.goBack && <LocationMatchingQuestion /> }
          {this.state.isNext && <MajorsMatchingQuestion />}
        
      </div>
    );
  }
}

export default DiversityMatchingQuestion;
