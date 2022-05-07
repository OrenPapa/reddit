import React from "react";
import Navbar from "../Components/Navbar";
import "../../Styles/main.scss";
import SubredditCard from "../Components/SubredditCard";
import useSubreddit from "../../Hooks/useSubreddit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { subredditData, loadingSubbredits, subredditError } = useSubreddit();
  return (
    <>
      <Navbar />
      <div className="homepage">
        {loadingSubbredits && <h2>Loading...</h2>}
        {subredditError && (
          <h2>An error has occured please refresh your page.</h2>
        )}
        {!loadingSubbredits &&
          !subredditError &&
          subredditData?.map((item, i) => {

            return (
                <SubredditCard
                  key={item.id}
                  onClick={() => navigate(`/posts/${item.id}`)}
                  title={item.title}
                  description={item.description}
                />
            );
          })}
      </div>
    </>
  );
}

export default Homepage;
