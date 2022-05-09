import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "./PostsSlice";
import SubredditSlice from "./SubredditSlice";

export const store = configureStore({
  reducer: {
    postsSlice: PostsSlice,
    subredditsSlice: SubredditSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
