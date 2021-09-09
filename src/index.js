import React from "react";
import ReactDOM from "react-dom";
import { SWRConfig } from "swr";
import { theme } from "@chakra-ui/core";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { createStore, StoreProvider } from "easy-peasy";

import { loadConstantsInWindow } from "./constants";
import { bootGlobalUtils } from "./utils";
import fetcher from "./utils/fetcher";
import model from "./model";
import App from "./App";

const store = createStore(model);
loadConstantsInWindow();
bootGlobalUtils();

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <SWRConfig value={{ fetcher }}>
        <ThemeProvider theme={customTheme}>
          <StoreProvider store={store}>
            <CSSReset />
            <App />
          </StoreProvider>
        </ThemeProvider>
      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
