import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "../../Styles/main.scss";
import SubredditCard from "../Components/SubredditCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/Store";
import { getSubreddits } from "../../Redux/SubredditSlice";
import { useDispatch } from "react-redux";

function Homepage() {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const subredditsState = useSelector(
    (state: RootState) => state.subredditsSlice
  );
  useEffect(() => {
    dispatch(getSubreddits(pageNumber));
  }, [dispatch, pageNumber]);

  window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight &&
      subredditsState.hasMore
    ) {
      setPageNumber(pageNumber + 1);
    }
  });

  return (
    <>
      <Navbar pageTitle="subreddits" />
      <div className="homepage">
        <div className="homepage__subreddits">
          {subredditsState.subreddits?.map((item) => {
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
        {subredditsState.isLoading && <h2>Loading...</h2>}
        {subredditsState.hasError && (
          <h2>An error has occurred please refresh your page.</h2>
        )}
      </div>
    </>
  );
}

export default Homepage;
