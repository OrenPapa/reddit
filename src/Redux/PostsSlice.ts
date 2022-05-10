import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post} from "../Types/Posts";

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
    updateVoteCount(state, action: PayloadAction<{ id: string; vote: string }>) {
      const post = state.posts.find((post) => post.id === action.payload.id);
      if (!post) return;
      if (action.payload.vote === "up") {
        post.upvotes += 1;
      }
      if (action.payload.vote === "down") {
        post.downvotes += 1;
      }
      }
  },
});
export const { setPostsData, updateVoteCount } = PostsSlice.actions;
export default PostsSlice.reducer;
