import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Login from "./Login";

function Auth({ match }) {
  return (
    <Fragment>
      <Route path={`${match.path}/login`} component={Login} />
    </Fragment>
  );
}

export default Auth;
