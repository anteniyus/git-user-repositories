import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import UserForm from "./UserForm";
import RepositoryList from "./RepositoryList";

function UserRepository(props) {
  const { username, toggleUsername, data } = props;
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <UserForm username={username} toggleUsername={toggleUsername} />
        <RepositoryList data={data} />
      </Grid>
    </Container>
  );
}

UserRepository.propTypes = {
  username: PropTypes.string.isRequired,
  toggleUsername: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default UserRepository;
