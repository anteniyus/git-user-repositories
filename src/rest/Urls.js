const protocol = "https";
const hostname = "api.github.com";
const subdirectory = "users";
const repositoryPath = "repos";

const GetRepositoryListUrl = (username) =>
  `${protocol}://${hostname}/${subdirectory}/${username}/${repositoryPath}`;

export default GetRepositoryListUrl;
