import React from "react";

import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import GitUserRepositoriesStore from "./dataStore/DataStore";
import UserRepositoryConnector from "./dataStore/UserRepositoryConnector";

const App = () => (
  <Provider store={GitUserRepositoriesStore}>
    <Router>
      <Switch>
        <Route path="/git" component={UserRepositoryConnector} />
        <Redirect to="/git/repositories" />
      </Switch>
    </Router>
  </Provider>
);

export default App;
