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

const toggleUsername = (username, params) => ({
  type: ActionTypes.TOGGLE_USERNAME,
  payload: api.GetData(username, params).then((response) => ({
    data: prepareTableData(response.data),
    username,
  })),
});

export default toggleUsername;

// [
//   {
//     id: "id01",
//     name: "name02",
//     starsCount: "starsCount03",
//     forksCount: "forksCount04",
//     htmlUrl: "htmlUrl05",
//   },
//   {
//     id: "id11",
//     name: "name02",
//     starsCount: "starsCount13",
//     forksCount: "forksCount14",
//     htmlUrl: "htmlUrl15",
//   },
//   {
//     id: "id21",
//     name: "name22",
//     starsCount: "starsCount23",
//     forksCount: "forksCount24",
//     htmlUrl: "htmlUrl25",
//   },
//   {
//     id: "id31",
//     name: "name32",
//     starsCount: "starsCount33",
//     forksCount: "forksCount34",
//     htmlUrl: "htmlUrl35",
//   },
// ]
