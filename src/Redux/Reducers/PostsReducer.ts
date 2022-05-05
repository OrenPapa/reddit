import { ActionType } from "../ActionTypes";

const initalState = 0;

export type Action = {
  type: ActionType.GET_POST_ID;
  payload: number;
};

const postReducer = (state: number = initalState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_POST_ID:
      return (state = action.payload);
    default:
      return state;
  }
};

export default postReducer;
