import React from "react";
import Navbar from "../Components/Navbar";
import "../../Styles/main.scss";
import SubredditCard from "../Components/SubredditCard";
import useSubreddit from "../../Hooks/useSubreddit";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux";
import { useSelector } from "react-redux";
import { State } from "../../Redux/Reducers/CombineReducers";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const { subredditData, loadingSubbredits, subredditError } = useSubreddit();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          subredditData.map((item) => {
            return (
              <div key={item.id}>
                <SubredditCard
                  onClick={() => navigate(`/posts/${item.id}`)}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Homepage;
