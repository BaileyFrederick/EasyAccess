import React, { Component } from "react";
import colors from "../colors.js"
import CollegeMatches from "../CollegeMatches";
import LocationMatchingQuestion from "./LocationMatchingQuestion"

class SizeMatchingQuestion extends Component {

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
            <button style={{backgroundColor: colors.blue_easyaccess, color: colors.white_easyaccess}} onClick={this.handleNext}>Small (2,000)</button>
            <br/>
            <button style={{backgroundColor: colors.gold_easyaccess}} onClick={this.handleNext}>Medium (2,000-10,000)</button>
            <br/>
            <button style={{backgroundColor: colors.blue_easyaccess, color: colors.white_easyaccess}} onClick={this.handleNext}>Large (10,000-15,000)</button>
            <br/>
            <button style={{backgroundColor: colors.gold_easyaccess}} onClick={this.handleNext}>X-Large (15,000+)</button>
            <br/>
            <button onClick={this.handleGoBackClick}>Go Back</button>
           </div>}

          {this.state.goBack && <CollegeMatches /> }
          {this.state.isNext && <LocationMatchingQuestion />}
        
      </div>
    );
  }
}

export default SizeMatchingQuestion;
