import React, { Component, Fragment } from "react";
import Alert from "Components/Core/Alert";
import log from "utils/logger";

const withGlobalComponents = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      log("Attached global components.");
    }

    render() {
      return (
        <Fragment>
          <Alert />
          <WrappedComponent />
        </Fragment>
      );
    }
  };
};

export default withGlobalComponents;
