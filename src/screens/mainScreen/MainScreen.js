import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import UserForm from "../user/UserForm";
import UserRepositoryList from "../user/UserRepositoryList";

function MainScreen(props) {
  const {
    toggleUsername,
    clearList,
    data,
    username,
    navigateToUserRoute,
  } = props;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <UserForm
          toggleUsername={toggleUsername}
          clearList={clearList}
          navigateToUserRoute={navigateToUserRoute}
          username={username}
        />
        <UserRepositoryList data={data || []} />
      </Grid>
    </Container>
  );
}

MainScreen.defaultProps = {
  username: "",
};

MainScreen.propTypes = {
  toggleUsername: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired,
  navigateToUserRoute: PropTypes.func.isRequired,
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
  username: PropTypes.string,
};

export default MainScreen;
