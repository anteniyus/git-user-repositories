import React, { Component } from "react";
import PropTypes from "prop-types";

import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import CustomButton from "./CustomButton";

import { rose } from "../constants/ColorPalette";

export default class UserForm extends Component {
  render() {
    const { username, toggleUsername } = this.props;
    return (
      <>
        <Grid item xs={12}>
          <TextField
            label="Enter username"
            value={username}
            onChange={(event) => {
              toggleUsername(event.target.value);
            }}
          />
          <CustomButton
            title="Search"
            onClick={this.handleSearchClick}
            iconComponent={<SearchIcon />}
          />
          <CustomButton
            title="Reset"
            onClick={this.handleRefreshClick}
            iconComponent={<RefreshIcon />}
            bgColor={rose}
          />
        </Grid>
      </>
    );
  }
}

UserForm.propTypes = {
  username: PropTypes.string.isRequired,
  toggleUsername: PropTypes.func.isRequired,
};
