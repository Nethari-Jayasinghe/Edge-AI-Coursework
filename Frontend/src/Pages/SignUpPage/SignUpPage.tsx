import React from "react";
import SignUpCard from "../../Components/SignUpCard/SignUpCard";
import "./SignUpPage.css";

type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <div className="body">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <SignUpCard />
      </div>
    </div>
  );
};

export default SignUpPage;
