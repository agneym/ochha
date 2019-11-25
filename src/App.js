import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "./utils/theme";
import Content from "./Content";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" component={Content} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
