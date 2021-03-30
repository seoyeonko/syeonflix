import React, { Component } from "react";
import Router from "./Router";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router />
      </div>
    );
  }
}

export default App;
