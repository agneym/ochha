import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "./utils/theme";
import Content from "./Content";
import GlobalStyles from "./utils/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" component={Content} />
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
