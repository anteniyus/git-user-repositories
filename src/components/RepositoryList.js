import React, { Component } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Table from "./CustomTable";

// eslint-disable-next-line react/prefer-stateless-function
export default class RepositoryList extends Component {
  openRepository = (item) => {
    window.open(item.htmlUrl, "_blank");
  };

  render() {
    const { data } = this.props;
    return (
      <>
        <Grid item xs={12}>
          <Table
            onRowClick={this.openRepository}
            data={data}
            columns={[
              { title: "Id", key: "id" },
              { title: "Name", key: "name" },
              { title: "Stars Count", key: "starsCount" },
              { title: "Forks Count", key: "forksCount" },
            ]}
          />
        </Grid>
      </>
    );
  }
}

RepositoryList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      starsCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      forksCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      htmlUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};
