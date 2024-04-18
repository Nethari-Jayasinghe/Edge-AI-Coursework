import React from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../../Firebase";
import SignUpCard from "../../Components/SignUpCard/SignUpCard";
import "./SignUpPage.css";
import { SignUpFormData } from "../../Types/UserTypes";
import { useNavigate } from "react-router";

type Props = {};

const SignUpPage = (props: Props) => {
  const navigate = useNavigate();

  const onSubmitSignupForm = async (values: SignUpFormData) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: `${values.name}`,
        });
      }

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="body">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <SignUpCard onSubmitSignupForm={onSubmitSignupForm} />
      </div>
    </div>
  );
};

export default SignUpPage;
