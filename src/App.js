import React, { Component } from "react";

import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import GitUserRepositoriesStore from "./dataStore/DataStore";
import UserRepositoryConnector from "./components/UserRepositoryConnector";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Provider store={GitUserRepositoriesStore}>
        <Router>
          <Switch>
            <Route path="/git" component={UserRepositoryConnector} />
            <Redirect to="/git" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
