import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";

const Main = lazy(() => import("./main/Main"));
const NotFound = lazy(() => import("./notFound/NotFound"));

function App() {
  return (
    <div>
      <div className="App-header">
        <img src="/btc.png" alt="icon" height="50%"></img>
        &nbsp;&nbsp;
        <span>Coin Info</span>
        &nbsp;&nbsp;
        <img src="/btc.png" alt="icon" height="50%"></img>
      </div>
      <Router>
        <Suspense fallback={<div>Please wait...</div>}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/main" />
            </Route>
            <Route path="/main" component={Main} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
