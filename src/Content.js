import React, { Fragment } from "react";
import { Route } from "react-router";

import Contacts from "./Contacts";

function Content({ match }) {
  return (
    <Fragment>
      <Route path={`${match.url}/`} component={Contacts} />
    </Fragment>
  );
}

export default Content;
