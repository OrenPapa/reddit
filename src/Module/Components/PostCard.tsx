import React from "react";
import "../../Styles/Components/Navbar.scss";
import { Icon } from "@iconify/react";

function PostCard(props: {
  voteCount?: number;
  title?: string;
  description?: string;
  user?: string;
  date?: string;
}) {
  return (
    <div className="post-card">
      <div className="post-card__content">
        <div className="post-card__left-panel">
          <div className="post-card__vote-container">
            <div className="post-card__icon">
              <Icon
                icon="akar-icons:arrow-up"
                color="gray"
                width="50"
                height="50"
              />
            </div>
            <div className="post-card__vote-count">{props.voteCount}</div>
            <div className="post-card__icon">
              <Icon
                icon="akar-icons:arrow-down"
                color="gray"
                width="50"
                height="50"
              />
            </div>
          </div>
        </div>
        <div className="post-card__right-panel">
          <div className="post-card__title">{props.title}</div>
          <div className="post-card__description">{props.description}</div>
          <div className="post-card__bottom-panel">
            <div className="post-card__user">{props.user}</div>
            <div className="post-card__date">
              {props.date + " " + "days ago"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
