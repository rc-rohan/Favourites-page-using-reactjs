import React from "react";
import { Link } from "react-router-dom";

function SidebarRow({ selected, pageLink, linkPath, text, icon }) {
  return (
    <div className={`sidebarRow ${selected === true ? "selected" : ""}`}>
      <div className="sidebarRow__icon">{icon}</div>
      <div className="sidebarRow__link">
        <Link to={`${linkPath}`}>{pageLink}</Link>
        <span className="sidebarRow__link__desc">{text}</span>
      </div>
    </div>
  );
}

export default SidebarRow;
