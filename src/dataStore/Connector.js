import { connect } from "react-redux";
import { toggleUsername, clearList } from "./ActionCreators";

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  toggleUsername,
  clearList,
};

const mergeProps = (dataStore, actionCreators, router) => ({
  ...dataStore,
  ...router,
  ...actionCreators,
  navigateToUserRoute: (username) =>
    router.history.push(`/git/repositories/${username}`),
});

const Connector = (WrappedComponent) =>
  connect(mapStateToProps, mapDispatchToProps, mergeProps)(WrappedComponent);

export default Connector;
