import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import Routes from "./Routes";
import ErrorBoundary from "Components/Core/ErrorBoundary";
import LoadingShell from "Components/Core/LoadingShell";
import SEO from "Components/SEO";
import withGlobalComponents from "hocs/withGlobalComponents";
import log from "./utils/logger";
import "./App.css";

function App() {
  const user = useStoreState((state) => state.user);
  const initializeUser = useStoreActions(
    (actions) => actions.user.initializeUser
  );

  useEffect(() => {
    log("App mounted.");
    initializeUser();
  }, [initializeUser]);

  useEffect(() => {
    log(user);
  });

  if (user.isInitializing) {
    return <LoadingShell />;
  }

  return (
    <ErrorBoundary>
      <SEO title="Home" />
      <Routes />
    </ErrorBoundary>
  );
}

export default withGlobalComponents(App);
