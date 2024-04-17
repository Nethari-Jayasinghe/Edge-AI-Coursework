import React from "react";
import "./DashboardItem.css";

interface Props {
  icon: string;
  title: string;
}

const DashboardItem = ({ icon, title }: Props) => {
  return (
    <div className="container">
      <div className="item">
        <div className="icon">
          <img src={icon} alt="" />
        </div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default DashboardItem;
