import { ActionType } from "../ActionTypes";

const initalState = 0;

export type Action = {
  type: ActionType.GET_SUBREDDIT_ID;
  payload: number;
};

const subredditReducer = (state: number = initalState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_SUBREDDIT_ID:
      return state = action.payload;
    default:
      return state;
  }
};

export default subredditReducer;
