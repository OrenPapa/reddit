import "../../Styles/main.scss";
import { Icon } from "@iconify/react";
import { PostCardType } from "../../Types/PostCardType";

function PostCard({
  id,
  voteCount,
  title,
  description,
  user,
  onUpvote,
  onDownvote,
  onClick,
}: PostCardType) {
  
  return (
    <div className="post-card">
      <div className="post-card__content">
        <div className="post-card__left-panel">
          <div className="post-card__vote-container">
            <div onClick={onUpvote} className="post-card__icon">
              <Icon
                icon="akar-icons:arrow-up"
                color="gray"
                width="50"
                height="50"
              />
            </div>
            <div className="post-card__vote-count">{voteCount}</div>
            <div onClick={onDownvote} className="post-card__icon">
              <Icon
                icon="akar-icons:arrow-down"
                color="gray"
                width="50"
                height="50"
              />
            </div>
          </div>
        </div>
        <div onClick={onClick} className="post-card__right-panel">
          <div className="post-card__title">{title}</div>
          <div className="post-card__description">{description}</div>
          <div className="post-card__bottom-panel">
            <div className="post-card__user">{user}</div>
            <div className="post-card__date">4 days ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
