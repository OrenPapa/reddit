import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Comment } from "../Types/Comments";

export const getComments = createAsyncThunk(
    "subreddits/getSubreddits",
    async ({subredditId, postId}: {subredditId: string | undefined , postId: string | undefined}) => {
      const response = await axios.get(`https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/${subredditId}/posts/${postId}/comments`)
      return response.data
    }
  )

type SubredditsState = {
    comments: Comment[];
    isLoading: boolean;
    hasError: boolean;

  };
  
  const initialState: SubredditsState = { comments: [], isLoading: true, hasError: false};

  const CommentsSlice = createSlice({
    name: "CommentsSlice",
    initialState: initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(getComments.pending, (state: SubredditsState) => {
          state.isLoading = true;
        },)
        .addCase(getComments.fulfilled, (state: SubredditsState, action: PayloadAction<Comment[]>) => {
         state.comments = action.payload
          state.isLoading = false;
        })
        .addCase(getComments.rejected, (state: SubredditsState) => {
          state.hasError = true;
          state.isLoading = false;
        }) }
  })

  export default CommentsSlice.reducer;
