import React from "react";
import { useState } from "react";
import "../../Styles/Components/Navbar.scss";

function SortBy() {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="sort-by">
      <div className="sort-by__title">Sort by</div>
      <div className="sort-by__dropdown-container">
        <div
          className="sort-by__dropdown-header"
          onClick={() => setOpenDropdown(!openDropdown)}
        ></div>
        {openDropdown && (
          <div className="sort-by__dropdown">
            <div className="sort-by__dropdown-item">Title desc</div>
            <div className="sort-by__dropdown-item">Date asce</div>
            <div className="sort-by__dropdown-item">Date desc</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SortBy;
