import { Component } from "react";
import Stateful from "@boostbank/stateful";
import { setComponent, reset, notify } from "./GlobalStateConnector";

export default class GlobalState extends Component {
  constructor(props) {
    super(props);
    this.state = props.store;
  }

  componentWillMount() {
    setComponent(this);
    Stateful.subscribe(state => {
      this.setState(state);
      notify(this.state);
    });
  }

  componentWillUnmount() {
    reset();
  }

  render() {
    return this.props.children;
  }
}
