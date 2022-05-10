import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import usePost from "../../Hooks/usePost";
import { RootState } from "../../Redux/Store";
import "../../Styles/main.scss";
import InformationCard from "../Components/InformationCard";
import Navbar from "../Components/Navbar";
import PostCard from "../Components/PostCard";
import SortBy from "../Components/SortBy";

function Posts() {
  const dispatch = useDispatch();
  const { subredditId } = useParams();
  const [urlParam, setUrlParam] = useState("");
  const { loadingPosts, postsError } = usePost(
    `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/${subredditId}/posts${urlParam}`
  );
  const navigate = useNavigate();
  const sortByTitle = "?sortBy=title";
  const postState = useSelector((state: RootState) => state.postsSlice.posts);
  const SubredditsState = useSelector(
    (state: RootState) => state.subredditsSlice.subreddits
  );

  const selectedSubreddit = SubredditsState.find(
    (subreddit) => subreddit.id === subredditId
  );

  return (
    <>
      <Navbar pageTitle={selectedSubreddit?.title} />
      <div className="posts-screen">
        <div className="posts-screen__left-panel">
          <div className="posts-screen__left-panel-content">
            <SortBy onClick={() => setUrlParam(sortByTitle)} />
            <div className="posts-screen__posts-container">
              {postState?.map((post) => {
                return (
                  <PostCard
                    key={post.id}
                    title={post.title}
                    description={post.body}
                    user={post.user}
                    voteCount={post.upvotes - post.downvotes}
                    onClick={() =>
                      navigate(`/posts/${subredditId}/post/${post.id}`)
                    }
                  />
                );
              })}
              {loadingPosts && <h2>Loading...</h2>}
              {postsError && (
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
