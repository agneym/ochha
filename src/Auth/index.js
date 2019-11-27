import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

function Auth({ match }) {
  return (
    <Fragment>
      <Route path={`${match.path}/login`} component={Login} />
      <Route path={`${match.path}/register`} component={Register} />
      <Route path={`${match.path}/forgot`} component={ForgotPassword} />
    </Fragment>
  );
}

export default Auth;
