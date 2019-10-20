import React, { Component } from "react";
import colors from "../colors.js"
import CollegeMatches from "../CollegeMatches";
import DiversityMatchingQuestion from "./DiversityMatchingQuestion.jsx";

class MajorsMatchingQuestion extends Component {

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
            <button style={{backgroundColor: colors.blue_easyaccess, color: colors.white_easyaccess}} onClick={this.handleNext}>Computer Science</button>
            <br/>
            <button style={{backgroundColor: colors.gold_easyaccess}} onClick={this.handleNext}>English</button>
            <br/>
            <button style={{backgroundColor: colors.blue_easyaccess, color: colors.white_easyaccess}} onClick={this.handleNext}>History</button>
            <br/>
            <button style={{backgroundColor: colors.gold_easyaccess}} onClick={this.handleNext}>Math</button>
            <br/>
            <button style={{backgroundColor: colors.blue_easyaccess, color: colors.white_easyaccess}} onClick={this.handleNext}>Biology</button>
            <br/>
            <button style={{backgroundColor: colors.gold_easyaccess}} onClick={this.handleNext}>Chemistry</button>
            <br/>
            <button style={{backgroundColor: colors.blue_easyaccess, color: colors.white_easyaccess}} onClick={this.handleNext}>Foreign Language</button>
            <br/>
            <button onClick={this.handleGoBackClick}>Go Back</button>
           </div>}

          {this.state.handleGoBackClick && <DiversityMatchingQuestion /> }
          {this.state.isNext && <CollegeMatches foundMatches={true}/>}
      </div>
    );
  }
}

export default MajorsMatchingQuestion;
