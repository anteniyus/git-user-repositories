import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import toggleUsername from "../dataStore/ActionCreators";
import UserRepository from "./UserRepository";

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  toggleUsername,
};

const UserRepositoryConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  // eslint-disable-next-line react/prefer-stateless-function
  class extends Component {
    render() {
      // eslint-disable-next-line react/prop-types,no-shadow
      const { username, toggleUsername, data } = this.props;

      return (
        <Switch>
          <Route
            path="/git/repositories/:username"
            render={() => (
              <UserRepository
                username={username}
                toggleUsername={toggleUsername}
                data={data || []}
              />
            )}
          />

          <Redirect to="/git/repositories" />
        </Switch>
      );
    }
  }
);

export default UserRepositoryConnector;
