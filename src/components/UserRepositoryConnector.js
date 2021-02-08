import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toggleUsername, clearList } from "../dataStore/ActionCreators";
import UserRepository from "./UserRepository";

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  toggleUsername,
  clearList,
};

const mergeProps = (dataStore, actionCreators, router) => ({
  ...dataStore,
  ...router,
  ...actionCreators,
  navigateToUserRoute: (username) =>
    router.history.push(`/git/repositories/${username}`),
});

const UserRepositoryConnector = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(
    // eslint-disable-next-line react/prefer-stateless-function
    class extends Component {
      render() {
        // eslint-disable-next-line react/prop-types,no-shadow
        const { toggleUsername, clearList, data } = this.props;
        // eslint-disable-next-line react/prop-types
        const { navigateToUserRoute } = this.props;

        return (
          <Switch>
            <Route
              path="/git/repositories/:username?"
              render={(routerProps) => (
                <UserRepository
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
      }
    }
  )
);

export default UserRepositoryConnector;
