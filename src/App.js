import React from "react";

import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import GitUserRepositoriesStore from "./dataStore/DataStore";
import MainScreen from "./screens/mainScreen/MainScreen";

const App = () => (
  <Provider store={GitUserRepositoriesStore}>
    <Router>
      <Switch>
        <Route path="/git" component={MainScreen} />
        <Redirect to="/git/repositories" />
      </Switch>
    </Router>
  </Provider>
);

export default App;
