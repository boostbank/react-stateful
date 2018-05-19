import React from "react";
import PropTypes from "prop-types";

export default class SubState extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.store.currentStore;
  }

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return this.props.children;
  }
}

SubState.propTypes = {
  store: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired
};
