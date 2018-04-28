import { Component} from "react";
import Stateful from "@boostbank/stateful";

export default class GlobalState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: props.store
    };
  }

  componentDidMount() {
    Stateful.subscribe(state => {});
  }

  componentWillUnmount() {}

  render() {
    return this.props.children;
  }
}
