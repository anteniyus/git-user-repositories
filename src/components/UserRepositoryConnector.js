import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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

const UserRepositoryConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  // eslint-disable-next-line react/prefer-stateless-function
  class extends Component {
    render() {
      // eslint-disable-next-line react/prop-types,no-shadow
      const { toggleUsername, clearList, data } = this.props;

      return (
        <Switch>
          <Route
            path="/git/repositories/:username"
            render={() => (
              <UserRepository
                toggleUsername={toggleUsername}
                clearList={clearList}
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
