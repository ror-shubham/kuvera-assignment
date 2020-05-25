import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Funds from "./Funds";
import Fund from "./Fund";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Funds />
          </Route>
          <Route exact path="/explore">
            <Funds />
          </Route>
          <Route path="/explore/:fundCode">
            <Fund/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
