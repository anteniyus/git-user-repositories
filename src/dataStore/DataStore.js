import { createStore, applyMiddleware } from "redux";
import RepositoryReducer from "./RepositoryReducer";
import asyncActions from "./AsyncMiddleware";

const GitUserRepositoriesStore = createStore(
  RepositoryReducer,
  applyMiddleware(asyncActions)
);

export default GitUserRepositoriesStore;
