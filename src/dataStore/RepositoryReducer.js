import ActionTypes from "./Types";

const RepositoryReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_USERNAME:
      return {
        ...storeData,
        data: action.payload.data,
      };
    case ActionTypes.UPDATE_USERNAME:
      return {
        ...storeData,
        username: action.username,
      };
    default:
      return storeData || {};
  }
};

export default RepositoryReducer;
