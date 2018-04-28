import React, { Component } from "react";
import GlobalState from "./components/GlobalState";
import { createStore } from "@boostbank/stateful";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalState store={createStore()}>test</GlobalState>
      </div>
    );
  }
}

export default App;
