import React from "react";
import "./App.css";

import Routes from "./Routes/PagesRoute";

function App() {
  return (
    <div className="App">
      <Routes />
      {/* <Router>
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
      </Router> */}
    </div>
  );
}

export default App;
