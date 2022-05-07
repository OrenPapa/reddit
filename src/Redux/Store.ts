import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "./PostsSlice";

export const store = configureStore({
  reducer: {
    postsSlice: PostsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
