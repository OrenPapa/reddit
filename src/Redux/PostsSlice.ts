import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, Posts } from "../Types/Posts";

type PostsArray = {
  posts: Array<Post>;
};

const initialState: PostsArray = { posts: [] };

const PostsSlice = createSlice({
  name: "PostsSlice",
  initialState: initialState,
  reducers: {
    setPostsData(state, action: PayloadAction<Array<Post>>) {
      state.posts = action.payload;
    },
  },
});
export const { setPostsData } = PostsSlice.actions;
export default PostsSlice.reducer;
