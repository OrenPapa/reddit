import React, { useState, useMemo, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ActionTypes, PostContext } from "../../Context/PostContext";
import { SubredditContext } from "../../Context/SubredditContext";
import "../../Styles/main.scss";
import InformationCard from "../Components/InformationCard";
import Navbar from "../Components/Navbar";
import PostCard from "../Components/PostCard";
import SortBy from "../Components/SortBy";

function Posts() {
  const { subredditId } = useParams();
  const [urlParam, setUrlParam] = useState("");
  const {
    postData,
    postLoading,
    postError,
    getPost,
    voteHandler,
  } = useContext(PostContext);
  const { subredditsData } = useContext(SubredditContext);
  const selectedSubreddit = useMemo(
    () => subredditsData!.find((subreddit) => subreddit.id === subredditId),
    [subredditsData]
  );
  const navigate = useNavigate();
  const sortByTitle = "?sortBy=title";

  getPost!(
    `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/${subredditId}/posts${urlParam}`
  );

  return (
    <>
      <Navbar pageTitle={selectedSubreddit!.title} />
      <div className="posts-screen">
        <div className="posts-screen__left-panel">
          <div className="posts-screen__left-panel-content">
            <SortBy onClick={() => setUrlParam(sortByTitle)} />
            <div className="posts-screen__posts-container">
              {postData?.map((post) => {
                return (
                  <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    description={post.body}
                    user={post.user}
                    voteCount={post.upvotes - post.downvotes}
                    onUpvote={() => {
                      voteHandler!(post.id, ActionTypes.UP_VOTE, true, false);
                    }}
                    onDownvote={() => {
                      voteHandler!(post.id, ActionTypes.UP_VOTE, false, true);
                    }}
                    onClick={() => {
                      navigate(`/posts/${subredditId}/post/${post.id}`);
                    }}
                  />
                );
              })}
              {postLoading && <h2>Loading...</h2>}
              {postError && (
                <h2>An error has occured please refresh your page.</h2>
              )}
            </div>
          </div>
        </div>
        <div className="posts-screen__right-panel">
          <div className="posts-screen__right-panel-content">
            <InformationCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
