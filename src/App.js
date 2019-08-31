import React, { Component } from "react";
import PartitionProvider from "./components/PartitionProvider";
import { createStore, modify } from "@boostbank/stateful";

class App extends Component {
  render() {
    setTimeout(() => {
      modify(state => {
        state.test = "Hello World";
        return state;
      });
    }, 5000);
    return (
      <PartitionProvider>
        <div className="App"></div>
      </PartitionProvider>
    );
  }
}

export default App;
