import { createStore, applyMiddleware } from "redux";
import RepositoryReducer from "./RepositoryReducer";
import CommonReducer from "./CommonReducer";
import asyncActions from "./AsyncMiddleware";

const GitUserRepositoriesStore = createStore(
  CommonReducer(RepositoryReducer),
  applyMiddleware(asyncActions)
);

export default GitUserRepositoriesStore;
