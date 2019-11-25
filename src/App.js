import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "./utils/theme";
import Content from "./Content";
import GlobalStyles from "./utils/global";
import Auth from "./Auth";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" component={Content} />
        </Switch>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
