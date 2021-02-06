import Axios from "axios";

class RestApi {
  GetData = async (username, params) =>
    this.SendRequest(
      "get",
      "https://api.github.com/users/".concat(username, "/repos"),
      params
    );

  SendRequest = (method, url, params) => Axios.request({ method, url, params });
}

export default RestApi;
