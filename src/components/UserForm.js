import React, { Component } from "react";
import PropTypes from "prop-types";

import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import CustomButton from "./CustomButton";

import { rose } from "../constants/ColorPalette";

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  render() {
    const { toggleUsername, clearList } = this.props;
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
            onClick={() => toggleUsername(username)}
            IconComponent={<SearchIcon />}
          />
          <CustomButton
            title="Reset"
            onClick={() => clearList()}
            IconComponent={<RefreshIcon />}
            bgColor={rose}
          />
        </Grid>
      </>
    );
  }
}

UserForm.propTypes = {
  toggleUsername: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired,
};
