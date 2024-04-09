import React from "react";
import LoginCard from "../../Components/LogInCard/LoginCard";
import "./LoginPage.css"
export default function LoginPage(){
    return(
    <div className="loginpagebody">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <LoginCard/>
      </div>
    </div>
    );
}