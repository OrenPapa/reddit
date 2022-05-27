import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Post} from "../Types/Posts";

export enum ActionTypes {
  UP_VOTE = 'UP_VOTE',
  DOWN_VOTE = 'DOWN_VOTE'
}

export const getPosts = createAsyncThunk(
  "subreddits/getSubreddits",
  async (url: string) => {
    const response = await axios.get(url)
    return response.data
  }
)
type PostsArray = {
  posts: Post[];
  isLoading: boolean;
  hasError: boolean;
  
};
const initialState: PostsArray = { posts: [] , isLoading: true, hasError: false,};

const PostsSlice = createSlice({
  name: "PostsSlice",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getPosts.pending, (state: PostsArray) => {
      state.isLoading = true;
    },)
    .addCase(getPosts.fulfilled, (state: PostsArray, action: PayloadAction<Post[]>) => {
     state.posts = action.payload
      state.isLoading = false;
    })
    .addCase(getPosts.rejected, (state: PostsArray) => {
      state.hasError = true;
      state.isLoading = false;
    }) },

  reducers: {
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
export const { updateVoteCount } = PostsSlice.actions;
export default PostsSlice.reducer;
