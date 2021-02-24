import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import UserForm from "../user/UserForm";
import UserRepositoryList from "../user/UserRepositoryList";

function Home(props) {
  const {
    toggleUsername,
    clearList,
    data,
    username,
    navigateToUserRoute,
    setLoading,
    isLoading,
  } = props;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <UserForm
          toggleUsername={toggleUsername}
          clearList={clearList}
          navigateToUserRoute={navigateToUserRoute}
          username={username}
          setLoading={setLoading}
        />
        <UserRepositoryList data={data || []} isLoading={isLoading} />
      </Grid>
    </Container>
  );
}

Home.defaultProps = {
  username: "",
};

Home.propTypes = {
  toggleUsername: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired,
  navigateToUserRoute: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
  username: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default Home;
