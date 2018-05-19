import React from "react";
import connect from "./components/connect";
import { rollback } from "@boostbank/stateful";
import { lookup, subModify } from "@boostbank/stateful/lib/substore";
import { connectTo, disconnectFrom } from "./../src/components/index";

export default class ListenerComponent extends React.Component {
  constructor() {
    super();
    this.state = connect(this, store => {
      this.setState({
        test: store.test
      });
    });
  }

  componentDidMount() {
    connectTo(this, lookup().test, store => {
      this.setState({
        subText: store.subText
      });
    });
  }

  componentWillUnmount() {
    disconnectFrom(this, lookup().test);
  }

  handleChange(e) {
    subModify(lookup().test, store => {
      store.subText = e.target.value;
      return store;
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
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
        <h2>Shared</h2>
        <p>{this.state.subText}</p>
      </div>
    );
  }
}
