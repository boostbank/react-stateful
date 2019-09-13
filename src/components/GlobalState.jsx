import { Component } from "react";
import {subscribe} from "@boostbank/stateful";
import { setComponent, reset, notify } from "./GlobalStateConnector";

export default class GlobalState extends Component {
  constructor(props) {
    super(props);
    if(props.store && props.store.currentStore){
      this.state = props.store.currentStore;
    }else{
      throw new Error("You have to pass a store to the Global State!");
    }
    setComponent(this);
  }

  componentDidMount() {
    subscribe(store => {
      this.setState(store);
      notify(store);
    });
  }

  componentWillUnmount() {
    reset();
  }

  render() {
    return this.props.children;
  }
}
