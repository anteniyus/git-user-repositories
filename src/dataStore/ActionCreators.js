import ActionTypes from "./Types";
import RestApi from "../rest/RestApi";

const api = new RestApi();

const toggleUsername = (username, params) => ({
  type: ActionTypes.TOGGLE_USERNAME,
  payload: api.GetData(username, params).then(() => ({
    data: [
      { title: "title1", value: "value1" },
      { title: "title2", value: "value2" },
    ],
    username,
  })),
});

// {
//   data: [
//     { title: "title1", value: "value1" },
//     { title: "title2", value: "value2" },
//   ],
//       username: "test",
// }
export default toggleUsername;
