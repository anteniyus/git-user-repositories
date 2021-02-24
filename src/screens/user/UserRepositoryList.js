import React, { Component } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Table from "../../components/CustomTable";
import CircularIndeterminate from "../../components/CircularIndeterminate";

export default class UserRepositoryList extends Component {
  openRepository = (item) => {
    window.open(item.htmlUrl, "_blank");
  };

  render() {
    const { data, isLoading } = this.props;
    return (
      <>
        <Grid item xs={12}>
          {isLoading ? (
            <CircularIndeterminate />
          ) : (
            <Table
              onRowClick={this.openRepository}
              data={data}
              columns={[
                { title: "Name", key: "name" },
                { title: "Stars Count", key: "starsCount" },
                { title: "Forks Count", key: "forksCount" },
              ]}
            />
          )}
        </Grid>
      </>
    );
  }
}

UserRepositoryList.propTypes = {
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
  isLoading: PropTypes.bool.isRequired,
};
