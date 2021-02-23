import React, { Component } from "react";
import PropTypes from "prop-types";

import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import CustomButton from "../../components/CustomButton";

import { rose } from "../../constants/ColorPalette";

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  componentDidMount() {
    const { username, toggleUsername, navigateToUserRoute } = this.props;
    if (username)
      this.setState({ username }, () => {
        navigateToUserRoute(username);
        toggleUsername(username);
      });
  }

  clearList = () => {
    const { clearList, navigateToUserRoute } = this.props;
    this.setState({ username: "" }, () => {
      navigateToUserRoute("");
      clearList();
    });
  };

  loadUserRepositories = (username) => {
    const { navigateToUserRoute, toggleUsername } = this.props;
    navigateToUserRoute(username);
    toggleUsername(username);
  };

  render() {
    const { username } = this.state;

    return (
      <>
        <Grid item xs={12}>
          <TextField
            label="Enter username"
            value={username}
            onChange={(event) => {
              this.setState({ username: event.target.value });
            }}
          />
          <CustomButton
            title="Search"
            onClick={() => this.loadUserRepositories(username)}
            IconComponent={<SearchIcon />}
          />
          <CustomButton
            title="Reset"
            onClick={this.clearList}
            IconComponent={<RefreshIcon />}
            bgColor={rose}
          />
        </Grid>
      </>
    );
  }
}

UserForm.defaultProps = {
  username: "",
};

UserForm.propTypes = {
  toggleUsername: PropTypes.func.isRequired,
  navigateToUserRoute: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired,
  username: PropTypes.string,
};
