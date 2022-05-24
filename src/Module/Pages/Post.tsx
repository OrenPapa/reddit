import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { CommentContext } from "../../Context/CommentContext";
import { PostContext } from "../../Context/PostContext";
import "../../Styles/main.scss";
import Navbar from "../Components/Navbar";
import PostCard from "../Components/PostCard";

function Post() {
  const { subredditId, postId } = useParams();
  const { commentsData, commentsError, commentsLoading, getComments } =
    useContext(CommentContext);
  const { postData } = useContext(PostContext);
  getComments!(
    `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/${subredditId}/posts/${postId}/comments`
  );

  const selectedPost = useMemo(
    () => postData?.find((post) => post.id === postId),
    [postId]
  );

  return (
    <>
      <Navbar pageTitle={selectedPost?.title} adminName={selectedPost?.user} />
      <div className="post-screen">
        <div className="post-screen__top-panel">
          <PostCard
            id={selectedPost!.id}
            title={selectedPost?.title}
            description={selectedPost?.body}
            user={selectedPost?.user}
            voteCount={selectedPost?.upvotes! - selectedPost?.downvotes!}
          />
        </div>
        <div className="post-screen__bottom-panel">
          {commentsLoading && <h2>Loading...</h2>}
          {commentsError && (
            <h2>An error has occured please refresh your page.</h2>
          )}
          {commentsData?.map((comment) => {
            return (
              <PostCard
                id={comment.id}
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
