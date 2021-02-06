import React, { Component } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Table from "./CustomTable";

// eslint-disable-next-line react/prefer-stateless-function
export default class RepositoryList extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <Grid item xs={12}>
          <Table data={data} />
        </Grid>
      </>
    );
  }
}

RepositoryList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};
