import { createStore } from "redux";
import RepositoryReducer from "./RepositoryReducer";

const GitUserRepositories = createStore(RepositoryReducer);

export default GitUserRepositories;
