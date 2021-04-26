import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { CssBaseline } from "@material-ui/core";
import "assets/styles/app.css";
import "assets/fonts/WebFonts/css/fontiran.css";

import { StylesProvider, ThemeProvider, jssPreset } from "@material-ui/styles";
import { create } from "jss";
import theme from "./theme";
import rtl from "jss-rtl";

import { Provider } from "react-redux";
import store from "store";

// Configure JSS rtl
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <App />
        </Provider>
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
