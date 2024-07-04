import React from "react";
import "./Topbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Topbar = ({ open, toggleDrawer }) => {
  const user = useSelector((state) => state.user.currentUser); 

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">Attendence Portal</span>
          </Link>
        </div>
        <div className="topRight">
          {!user && (
            <div className="topbarIconContainer">
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <button className="topbarButton">SIGNUP</button>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button className="topbarButton">LOGIN</button>
              </Link>
            </div>
          )}
          <MenuIcon className="menuIcon" onClick={toggleDrawer(true)} />

          {user && (
            <img
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="topAvatar"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
