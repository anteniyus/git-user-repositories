import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";

import Home from "../home/Home";
import Connector from "../../dataStore/Connector";

const MainScreen = (props) => {
  const { toggleUsername, clearList, data, navigateToUserRoute } = props;

  return (
    <Switch>
      <Route
        path="/git/repositories/:username?"
        render={(routerProps) => (
          <Home
            toggleUsername={toggleUsername}
            clearList={clearList}
            navigateToUserRoute={navigateToUserRoute}
            data={data || []}
            username={routerProps.match.params.username}
          />
        )}
      />
    </Switch>
  );
};

MainScreen.propTypes = {
  toggleUsername: PropTypes.func.isRequired,
  navigateToUserRoute: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Connector(MainScreen);
