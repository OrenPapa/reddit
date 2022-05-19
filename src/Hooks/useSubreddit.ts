import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {SubredditsResponse } from "../Types/Subreddits";
// import { useDispatch } from "react-redux";
// import { setSubredditsData } from "../Redux/SubredditSlice";

// function useSubreddit(url: string) {
//   const [loadingSubbredits, setLoadingSubreddits] = useState(false);
//   const [subredditError, setSubredditError] = useState(null);
//   const [hasMore, setHasMore] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     setLoadingSubreddits(true);
//     axios
//       .get(url)
//       .then((response: SubredditsResponse) => {
//         dispatch(setSubredditsData(response.data))
//         setHasMore(response.data.length > 0);
//         setLoadingSubreddits(false);
//       })
//       .catch((err) => {
//         setSubredditError(err);
//       });
//   }, [dispatch,url,]);

//   return { loadingSubbredits, subredditError, hasMore };
// }

// export default useSubreddit;
