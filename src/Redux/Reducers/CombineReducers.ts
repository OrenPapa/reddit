import { combineReducers } from "redux";
import postReducer from "./PostsReducer";
import subredditReducer from "./SubredditReducer";

const reducers = combineReducers({
      subreddit: subredditReducer,
      post: postReducer ,
});

export default reducers
export type State = ReturnType<typeof reducers>