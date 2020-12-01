import React from "react";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ChartPage from "../pages/ChartPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function Routers() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/home/:cityId">
            <ChartPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default Routers;
