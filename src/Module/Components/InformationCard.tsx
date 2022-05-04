import React from "react";
import "../../Styles/Components/Navbar.scss";

function InformationCard() {
  return (
    <div className="information-card">
      <div className="information-card__content">
        <div className="information-card__subreddit">/b/reactjs</div>
        <div className="information-card__title">
          This is the offical subreddit for react js
        </div>
        <div className="information-card__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit iure
          saepe nobis corporis explicabo numquam pariatur.
        </div>
        <div className="information-card__bottom-container">
          <div className="information-card__admin">admin: /u/Admin</div>
          <div className="information-card__date">
            created on: July 4th, 2019
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationCard;
