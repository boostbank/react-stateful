import React, { Component } from "react";
import ListenerComponent from "./ListenerComponent";
import { createStore, modify } from "@boostbank/stateful";

createStore({test: "No Hello"})

class App extends Component {
  render() {
    setTimeout(() => {
      modify(state => {
        state.test = "Hello World";
        return state;
      });
    }, 5000);
    return (
      <div className="App">
        <ListenerComponent />
      </div>
    );
  }
}

export default App;
