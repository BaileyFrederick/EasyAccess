import React, { Component } from "react";

class MainSelection extends Component {
  state = {};
  //look at page routing
  render() {
    return (
      <div>
        <button>College Matches</button>
        <button>Applications</button>
        <button>Affordiability</button>
        <button>Account Info</button>
      </div>
    );
  }
}

export default MainSelection;
