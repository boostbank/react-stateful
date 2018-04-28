import React, { Component } from "react";
import GlobalState from "./components/GlobalState";
import ListenerComponent from './ListenerComponent';
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
      <div className="App">
        <GlobalState store={createStore({test: "No Hello"})}>
          <ListenerComponent/>
        </GlobalState>
      </div>
    );
  }
}

export default App;
