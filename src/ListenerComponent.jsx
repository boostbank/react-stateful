import React from "react";
import { lookup, subModifyAsync } from "@boostbank/stateful";
import {
  connectTo,
  disconnectFrom,
  disconnect,
  connect
} from "./../src/components/index";

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
    connectTo(this, lookup().test, (store, modified) => {
      this.setState({
        subText: store.subText
      }, ()=>{
        modified(this);
      });
    });
  }

  componentWillUnmount() {
    disconnectFrom(this, lookup().test);
  }

  handleChange(e) {
    subModifyAsync(this, lookup().test, store => {
      store.subText = e.target.value;
      return store;
    }, ()=>{
      console.log("GOT EMMMMMMMM");
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <p
          onClick={() => {
            disconnect(this);
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
