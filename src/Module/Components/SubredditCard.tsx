import React, { MouseEventHandler } from "react";
import "../../Styles/main.scss";

function SubredditCard(props: {
  title: string;
  description: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div onClick={props.onClick} className="subreddit-card">
      <div className="subreddit-card__content">
        <div className="subreddit-card__title">{props.title}</div>
        <div className="subreddit-card__description">{props.description}</div>
      </div>
    </div>
  );
}

export default SubredditCard;
