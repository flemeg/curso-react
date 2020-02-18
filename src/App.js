import React, { Component, useState } from "react";
import "./css/pure-min.css";
import "./css/side-menu.css";
import Menu from "./components/Menu";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Menu />;
  }
}

export default App;
