import React, { Component } from "react";

class InputField extends Component {
  state = {
    value: this.props.value
  };

  handleInputSelection = product => {
    //set state on input field
    //like how it reacts to typing and different mandatory input
  };

  render() {
    return (
      <div>
        <form
          onClick={() => this.handleInputSelection({ id: 1 })}
          className="btn btn-primary btn-sm m-2"
        >
          <input type="text" name="FirstName" value="Mickey"></input>
        </form>
      </div>
    );
  }
}

export default InputField;
