import React from "react";
import { useParams } from "react-router-dom";
import useComment from "../../Hooks/useComment";
import usePost from "../../Hooks/usePost";
import "../../Styles/main.scss";
import Navbar from "../Components/Navbar";
import PostCard from "../Components/PostCard";

function Post() {
  const { subredditId, postId } = useParams();
  const { postData, loadingPosts, postsError } = usePost(
    `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/1/posts/1`
  );
  const { CommentsData, loadingComments, CommentsError } = useComment(
    `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/${subredditId}/posts/${postId}/comments`
  );

  return (
    <>
      <Navbar />
      <div className="post-screen">
        <div className="post-screen__top-panel">
          <PostCard />
        </div>
        <div className="post-screen__bottom-panel">
          {CommentsData.map((comment) => {
            return (
              <PostCard
                key={comment.id}
                title={"Comment"}
                description={comment.body}
                user={comment.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Post;
