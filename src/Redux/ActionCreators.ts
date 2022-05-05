import { ActionType } from "./ActionTypes";
import { Dispatch } from "redux";
import { Action } from "./Reducers/SubredditReducer";

export const getSubredditId = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.GET_SUBREDDIT_ID,
      payload: id,
    });
  };
};

export const getPostId = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.GET_POST_ID,
      payload: id,
    });
  };
};
