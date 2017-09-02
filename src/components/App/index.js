import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Heroes from "../Heroes";
import Dashboard from "../Dashboard";
import HeroForm from "../Heroes/HeroForm";

import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <h1>Git Tour of Heroes</h1>
          <nav>
            <NavLink to="/" activeClassName="active">
              Dashboard
            </NavLink>
            <NavLink to="/heroes" activeClassName="active">
              Heroes
            </NavLink>
          </nav>
          <hr />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/heroes" component={Heroes} />
          <Route path={"/heroes/details/:heroid"} component={HeroForm} />
        </div>
      </Router>
    );
  }
}

export default App;
