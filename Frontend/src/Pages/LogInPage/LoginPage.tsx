import React from "react";

import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../Firebase";
import LoginCard from "../../Components/LogInCard/LoginCard";
import "./LoginPage.css";
import { localStorageService } from "../../Services/LocalStorage";

export default function LoginPage() {
  const navigate = useNavigate();

  const onLogin = async (value: { email: string; password: string }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        value.email,
        value.password
      );
      if (userCredential) {
        const user = userCredential.user;
        localStorageService.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
        console.log(user);
      }
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(errorCode, errorMessage);
    }
  };

  return (
    <div className="loginpagebody">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <LoginCard onLogin={onLogin} />
      </div>
    </div>
  );
}
