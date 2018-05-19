import { Component } from "react";
import Stateful from "@boostbank/stateful";
import { setComponent, reset, notify } from "./GlobalStateConnector";

export default class GlobalState extends Component {
  constructor(props) {
    super(props);
    if(props.store && props.store.currentStore){
      this.state = props.store.currentStore;
    }else{
      throw new Error("You have to pass a store to the Global State!");
    }
  }

  componentWillMount() {
    setComponent(this);
    Stateful.subscribe(state => {
      this.setState(state);
      notify(state);
    });
  }

  componentWillUnmount() {
    reset();
  }

  render() {
    return this.props.children;
  }
}
