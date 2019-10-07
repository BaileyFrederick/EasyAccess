import React, { Component } from "react";
import InputField from "./InputField";

class CreateNewAccount extends Component {
  state = {};
  render() {
    return (
      <div>
        <InputField></InputField>
        <InputField></InputField>
        <InputField></InputField>
        <InputField></InputField>
        <InputField></InputField>
      </div>
    );
  }
}

export default CreateNewAccount;
