import { configureStore } from "@reduxjs/toolkit";
import CommentsSlice from "./CommentsSlice";
import PostsSlice from "./PostsSlice";
import SubredditSlice from "./SubredditSlice";

export const store = configureStore({
  reducer: {
    postsSlice: PostsSlice,
    subredditsSlice: SubredditSlice,
    commentsSlice: CommentsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
