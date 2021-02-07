import ActionTypes from "./Types";

const RepositoryReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_USERNAME:
      return {
        ...storeData,
        data: action.payload.data,
      };
    case ActionTypes.CLEAR_List:
      return {
        ...storeData,
        data: [],
        username: "",
      };
    default:
      return storeData || {};
  }
};

export default RepositoryReducer;
