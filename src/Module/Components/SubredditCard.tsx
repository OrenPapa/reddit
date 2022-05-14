import React from "react";
import "../../Styles/main.scss";
import { SubredditCardType } from "../../Types/SubredditCardType";

function SubredditCard({ title, description, onClick }: SubredditCardType) {
  return (
    <div onClick={onClick} className="subreddit-card">
      <div className="subreddit-card__content">
        <div className="subreddit-card__title">{title}</div>
        <div className="subreddit-card__description">{description}</div>
      </div>
    </div>
  );
}

export default SubredditCard;
