import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getUniqueObjects } from "../Helpers/Helpers";
import { Subreddit, SubredditsResponse } from "../Types/Subreddits";

export const getSubreddits = createAsyncThunk(
  "subreddits/getSubreddits",
  async (url: string) => {
    const response: SubredditsResponse = await axios.get(url)
    return response.data
  }
)

type SubredditsState = {
  subreddits: Subreddit[];
  isLoading: boolean;
  hasError: boolean;
  hasMore: boolean
};

const initialState: SubredditsState = { subreddits: [], isLoading: true, hasError: false, hasMore: false };

const SubredditsSlice = createSlice({
  name: "SubredditsSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getSubreddits.pending, (state: SubredditsState) => {
      state.isLoading = true;
    },)
    .addCase(getSubreddits.fulfilled, (state: SubredditsState, action: PayloadAction<Subreddit[]>) => {
     state.subreddits = getUniqueObjects([...state.subreddits, ...action.payload])
     state.hasMore = action.payload.length > 0; 
      state.isLoading = false;
    })
    .addCase(getSubreddits.rejected, (state: SubredditsState) => {
      state.hasError = true;
      state.isLoading = false;
    }) }
});
export default SubredditsSlice.reducer;
