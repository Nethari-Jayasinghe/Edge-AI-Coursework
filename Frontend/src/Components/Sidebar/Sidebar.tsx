import React from "react";
import "./Sidebar.css";
import wallpaper from "../Assets/signup-wallpaper.png";
import DashboardItem from "../DashboardItem/DashboardItem";
import DashboardIcon from "./dashboard.png";
import HistoryIcon from "./history.png";
import LocationIcon from "./location.png";
import SettingIcon from "./setting.png";
import InfoIcon from "./info.png";
import { Link } from "react-router-dom";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="sidebar">
      <div className="image">
        <img src={wallpaper} alt="" />
      </div>
      <div className="items">
        <Link to="/dashboard" className="link">
          <DashboardItem icon={DashboardIcon} title="Dashboard" />
        </Link>
        <Link to="/history" className="link">
          <DashboardItem icon={HistoryIcon} title="History" />
        </Link>
        <Link to="/location" className="link">
          <DashboardItem icon={LocationIcon} title="Location" />
        </Link>
        <Link to="/setting" className="link">
          <DashboardItem icon={SettingIcon} title="Settings" />
        </Link>
        <Link to="/account" className="link">
          <DashboardItem icon={DashboardIcon} title="Accounts" />
        </Link>
        <Link to="/about" className="link">
          <DashboardItem icon={InfoIcon} title="About" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
