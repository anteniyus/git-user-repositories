import ActionTypes from "./Types";

const RepositoryReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_USERNAME:
      return {
        ...storeData,
        data: action.payload.data,
        isLoading: action.payload.isLoading,
      };
    case ActionTypes.CLEAR_List:
      return {
        ...storeData,
        data: [],
        username: "",
      };
    case ActionTypes.SET_LOADING:
      return {
        ...storeData,
        isLoading: action.payload.isLoading,
      };
    default:
      return storeData || {};
  }
};

export default RepositoryReducer;
