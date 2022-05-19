import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import "../../Styles/main.scss";
import SubredditCard from "../Components/SubredditCard";
import { useNavigate } from "react-router-dom";
import { SubredditContext } from "../../Context/SubredditContext";

function Homepage() {
  const navigate = useNavigate();
  const {
    subredditsData,
    subredditsLoading,
    subredditsError,
    subredditsHasMore,
    changePageNumber,
  } = useContext(SubredditContext);

  window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight &&
      subredditsHasMore
    ) {
      changePageNumber!();
    }
  });

  return (
    <>
      <Navbar pageTitle="subreddits" />
      <div className="homepage">
        <div className="homepage__subreddits">
          {subredditsData?.map((item) => {
            return (
              <div key={item.id}>
                <SubredditCard
                  key={item.id}
                  onClick={() => navigate(`/posts/${item.id}`)}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="homepage__text">
        {subredditsLoading && <h2>Loading...</h2>}
        {subredditsError && (
          <h2>An error has occured please refresh your page.</h2>
        )}
      </div>
    </>
  );
}

export default Homepage;
