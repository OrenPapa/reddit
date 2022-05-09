import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../Types/Posts";
import { Subreddit } from "../Types/Subreddits";

type SubredditsArray = {
  subreddits: Subreddit[];
};

const initialState: SubredditsArray = { subreddits: [] };

const SubredditsSlice = createSlice({
  name: "SubredditsSlice",
  initialState: initialState,
  reducers: {
    setSubredditsData(state, action: PayloadAction<Subreddit[]>) {
      state.subreddits = Array.from(
        new Set([...state.subreddits, ...action.payload])
      );
    },
  },
});
export const { setSubredditsData } = SubredditsSlice.actions;
export default SubredditsSlice.reducer;
