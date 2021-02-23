import Axios from "axios";

import GetRepositoryListUrl from "./Urls";

class RestApi {
  GetData = async (username, params) =>
    this.SendRequest("get", GetRepositoryListUrl(username), params);

  SendRequest = (method, url, params) => Axios.request({ method, url, params });
}

export default RestApi;
