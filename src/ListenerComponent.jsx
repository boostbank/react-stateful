import React from "react";
import connect from "./components/connect";
import { rollback } from "@boostbank/stateful";

export default class ListenerComponent extends React.Component {
  constructor() {
    super();
    this.state = connect(this, store => {
      this.setState({
        test: store.test
      });
    });
  }

  render() {
    return (
      <div>
        <p
          onClick={() => {
            console.log(this);
          }}
        >
          Print state
        </p>
        <div
          onClick={() => {
            rollback();
          }}
        >
          {this.state.test}
        </div>
      </div>
    );
  }
}
