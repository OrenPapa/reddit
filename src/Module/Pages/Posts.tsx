import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePost from "../../Hooks/usePost";
import "../../Styles/main.scss";
import InformationCard from "../Components/InformationCard";
import Navbar from "../Components/Navbar";
import PostCard from "../Components/PostCard";
import SortBy from "../Components/SortBy";

function Posts() {
  const { subredditId } = useParams();
  const { postData, loadingPosts, postsError } = usePost(`https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/${subredditId}/posts`);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="posts-screen">
        <div className="posts-screen__left-panel">
          {loadingPosts && <h2>Loading...</h2>}
          {postsError && (
            <h2>An error has occured please refresh your page.</h2>
          )}
          {!loadingPosts && (
            <div className="posts-screen__left-panel-content">
              <SortBy />
              <div className="posts-screen__posts-container">
                {postData.map((post) => {
                  return (
                    <PostCard
                      key={post.id}
                      title={post.title}
                      description={post.body}
                      user={post.user}
                      onClick={() =>
                        navigate(`/posts/${subredditId}/post/${post.id}`)
                      }
                    />
                  );
                })}
              </div>
            </div>
          )}
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
