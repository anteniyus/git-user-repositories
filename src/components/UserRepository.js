import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import UserForm from "./UserForm";
import RepositoryList from "./RepositoryList";

function UserRepository(props) {
  const { toggleUsername, data } = props;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <UserForm toggleUsername={toggleUsername} />
        <RepositoryList data={data || []} />
      </Grid>
    </Container>
  );
}

UserRepository.propTypes = {
  toggleUsername: PropTypes.func.isRequired,
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

export default UserRepository;
