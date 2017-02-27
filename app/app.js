import React from "react"; // eslint-disable-line no-unused-vars
import { render } from "react-dom";
import { Route, Router, browserHistory } from "react-router";

const IndexPage = require("./pages/index-page");

render((
  <Router history={browserHistory}>
    <Route path="/" component={IndexPage}/>
  </Router>
), document.getElementById("demo"));
