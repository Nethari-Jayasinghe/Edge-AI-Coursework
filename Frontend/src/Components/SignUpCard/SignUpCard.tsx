import { Button, Typography } from "@mui/material";
import AppInput from "../AppInput/AppInput";
import wallpaper from "../Assets/signup-wallpaper.png";
import "./SignUpCard.css";
import { Link } from "react-router-dom";
import {useState} from "react";

type Props = {};

const SignUpCard = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

   function submit(){
    console.log(name,email,password)
  }
  return (
    <div className="signup-wrapper">
    <div className="signup-card">
      <div className="image">
        <br>
        </br>
        <img src={wallpaper} alt="" />
        <div className="discription">
          <h2>Create an account</h2>
          <p>Navigate Safely, Coexist Peacefully</p>
        </div>
      </div>
      <div className="form">
        <form>
          <AppInput
              name="name"
              type="name"
              title="Name:"
              onChange={handleNameChange} // Pass callback function to handle name change
          />
          <AppInput
              name="email"
              type="email"
              title="Email * :"
              onChange={handleEmailChange} // Pass callback function to handle email change
          />
          <AppInput
              name="phoneNumber"
              type="tel"
              title="Phone number:"
              onChange={handlePhoneNumberChange} // Pass callback function to handle phone number change
          />
          <AppInput
              name="password"
              type="password"
              title="Password * :"
              info="Must be at least 8 characters"
              onChange={handlePasswordChange} // Pass callback function to handle password change
          />
          <div className="sign-up-btn">
            <Button variant="contained" onClick={()=>submit()} sx={{ backgroundColor: "#000000" }}>
              Create An Account
            </Button>
            
          </div>
          <br>
          </br>
        </form>
      </div>
      
    </div>
    </div>
  );
};

export default SignUpCard;
