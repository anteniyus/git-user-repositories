import ActionTypes from "./Types";
import RestApi from "../rest/RestApi";

const api = new RestApi();

const prepareTableData = (reposData) =>
  reposData.map((repo) => {
    // eslint-disable-next-line camelcase
    const { id, name, stargazers_count, forks_count, html_url } = repo;
    return {
      id,
      name,
      starsCount: stargazers_count,
      forksCount: forks_count,
      htmlUrl: html_url,
    };
  });

export const toggleUsername = (username, params) => ({
  type: ActionTypes.TOGGLE_USERNAME,
  payload: api.GetData(username, params).then((response) => ({
    data: prepareTableData(response.data),
    username,
  })),
});

export const clearList = () => ({
  type: ActionTypes.CLEAR_List,
});
