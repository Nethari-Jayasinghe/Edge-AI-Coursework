import { Typography } from "@mui/material";
import AppInput from "../AppInput/AppInput";
import { Link } from "react-router-dom";
import wallpaper from "../Assets/signup-wallpaper.png";
import React, {useState} from "react";
import "./LoginCard.css";
export default function LoginCard(){
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };
    
    return(
    <div className="login-wrapper">
    <div className="login-card">
      <div className="image">
        <img src={wallpaper} alt="" />
        <div className="discription">
          <h2>Create an account</h2>
          <p>Where confidence begins</p>
        </div>
      </div>

      <div className="form">
        
        <form>
          <AppInput name="email" type="email" title="Email * :"
                    onChange={handleEmailChange} // Pass callback function to handle name change
          />
          <AppInput
            name="password"
            type="password"
            title="Password * :"
            onChange={handlePasswordChange} // Pass callback function to handle name change

            info="Must be at least 8 charactres"
          />

          <div className="footer">
            <Link to="/">
              <Typography variant="body1">Sign up?</Typography>
            </Link>
            <Link to="/dashboard">
              <Typography variant="body1">Sign in to your account</Typography>
            </Link>
          </div>


        </form>
      </div>
      
    </div>
    </div>
    );

}