import React, { Component } from "react";

import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import GitUserRepositories from "./dataStore/DataStore";
import UserRepositoryConnector from "./components/UserRepositoryConnector";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Provider store={GitUserRepositories}>
        <Router>
          <Switch>
            <Route path="/shop" component={UserRepositoryConnector} />
            <Redirect to="/shop" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
