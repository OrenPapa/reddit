import React, { MouseEventHandler } from "react";
import { useState } from "react";
import "../../Styles/Components/Navbar.scss";
import { Icon } from "@iconify/react";

function SortBy(props: { onClick: MouseEventHandler<HTMLDivElement> }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="sort-by">
      <div className="sort-by__title">Sort by</div>
      <div className="sort-by__dropdown-container">
        <div
          className="sort-by__dropdown-header"
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          Sort by:
          <Icon
            icon="dashicons:arrow-down-alt2"
            color="black"
            width="16"
            height="16"
          />
        </div>
        {openDropdown && (
          <div className="sort-by__dropdown">
            <div onClick={props.onClick} className="sort-by__dropdown-item">
              Title desc
            </div>
            <div className="sort-by__dropdown-item">Date asce</div>
            <div className="sort-by__dropdown-item">Date desc</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SortBy;
