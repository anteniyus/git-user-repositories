import ActionTypes from "./Types";
import RestApi from "../rest/RestApi";

const api = new RestApi();

const prepareTableData = (reposData) =>
  reposData.map((repo) => {
    const {
      id,
      name,
      stargazers_count: starsCount,
      forks_count: forksCount,
      html_url: htmlUrl,
    } = repo;
    return {
      id,
      name,
      starsCount,
      forksCount,
      htmlUrl,
    };
  });

export const toggleUsername = (username, params) => ({
  type: ActionTypes.TOGGLE_USERNAME,
  payload: api.GetData(username, params).then((response) => ({
    data: prepareTableData(response.data),
    isLoading: false,
  })),
});

export const clearList = () => ({
  type: ActionTypes.CLEAR_List,
});

export const setLoading = (isLoading) => ({
  type: ActionTypes.SET_LOADING,
  payload: {
    isLoading,
  },
});
