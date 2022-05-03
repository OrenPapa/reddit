import React from "react";
import "../../Styles/Components/Navbar.scss";

function Navbar(props: { pageTitle?: string; adminName?: string }) {
  return (
    <div className="navbar">
      <div className="navbar__title">Reddit</div>
      <div className="navbar__page-title">{props.pageTitle}</div>
      <div className="navbar__admin-name">{props.adminName}</div>
    </div>
  );
}

export default Navbar;
