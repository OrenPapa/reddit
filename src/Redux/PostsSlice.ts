import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post} from "../Types/Posts";

export enum ActionTypes {
  UP_VOTE = 'UP_VOTE',
  DOWN_VOTE = 'DOWN_VOTE'
}

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
    updateVoteCount(state, action: PayloadAction<{ id: string; vote: string, isUpvoted?: boolean, isDownvoted?: boolean }>) {
      const post = state.posts.find((post) => post.id === action.payload.id);
      if (!post) return;
      if (action.payload.vote === ActionTypes.UP_VOTE && !post.isUpvoted && !post.isDownvoted) {
        post.upvotes += 1;
        post.isUpvoted = action.payload.isUpvoted!
        post.isDownvoted = action.payload.isDownvoted!
      }
      if (action.payload.vote === ActionTypes.UP_VOTE && !post.isUpvoted && post.isDownvoted) {
        post.upvotes += 2;
        post.isUpvoted = action.payload.isUpvoted!
        post.isDownvoted = action.payload.isDownvoted!
      }
      if (action.payload.vote === ActionTypes.DOWN_VOTE && !post.isUpvoted && !post.isDownvoted) {
        post.downvotes += 1;
        post.isDownvoted = action.payload.isDownvoted!
        post.isUpvoted = action.payload.isUpvoted!
      }
      if (action.payload.vote === ActionTypes.DOWN_VOTE && post.isUpvoted && !post.isDownvoted) {
        post.downvotes += 2;
        post.isDownvoted = action.payload.isDownvoted!
        post.isUpvoted = action.payload.isUpvoted!
      }
      }
  },
});
export const { setPostsData, updateVoteCount } = PostsSlice.actions;
export default PostsSlice.reducer;
