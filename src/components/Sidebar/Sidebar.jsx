import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../logo/mainlogo.jpg";
import { SidebarData } from "../Data/Data";

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  return (
    <div className="sidebar">
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>
          Auto <span>Irrigation</span>
        </span>
      </div>

      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={
                selectedMenu === index ? "menuItem active" : "menuItem"
              }
              key={index}
              onClick={() => {
                setSelectedMenu(index);
              }}
            >
              {/* <item.icon /> */}
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
