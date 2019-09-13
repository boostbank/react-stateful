import React from "react";
import { lookup, subModifyAsync, rollback } from "@boostbank/stateful";
import {
  connectTo,
  disconnectFrom,
} from "./../src/components/index";

export default class ListenerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    connectTo(this, lookup().test, (store, modified) => {
      this.setState({
        subText: store.subText
      }, ()=>{
        console.log("TEST");
        modified(this);
      });
    });
  }

  componentWillUnmount() {
    disconnectFrom(this, lookup().test);
  }

  handleChange = e => {
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
        <div
          onClick={() => {
            rollback();
          }}
        >
        </div>
        <h2>Shared</h2>
        <p>{this.state.subText}</p>
      </div>
    );
  }
}
