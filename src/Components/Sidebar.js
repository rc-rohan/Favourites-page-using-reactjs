import React,{useState} from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";


function Sidebar() {
  
  return (
    <div className="sidebar">
      <SidebarRow
        icon={<i className="bx  bx-user"></i>}
        pageLink="Account"
        linkPath="/account"
        text="your Accont Prefrences"
      />
      <SidebarRow
        icon={<i className="bx bxs-bell"></i>}
        pageLink="Notification"
        linkPath="/notification"
        text="your Accont Prefrences"
      />
      <SidebarRow
        selected={true}
        icon={<i className="bx bxs-add-to-queue"></i>}
        pageLink="Integations"
        linkPath="/"
        text="your Accont Prefrences"
      />
      <SidebarRow
        icon={<i className="bx bxs-user-detail"></i>}
        pageLink="Collegaues"
        linkPath="/colleagues"
        text="your Accont Prefrences"
      />
      <SidebarRow
        icon={<i className="bx bxs-tag-alt"></i>}
        pageLink="Tags"
        linkPath="/tags"
        text="your Accont Prefrences"
      />
    </div>
  );
}

export default Sidebar;
