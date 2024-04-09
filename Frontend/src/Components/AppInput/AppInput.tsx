import { Input, Typography } from "@mui/material";
import "./AppInput.css";
import React from "react";

interface Props {
  type: string;
  name: string;
  title: string;
  info?: string;
    onChange: (value: string) => void;
}

const AppInput = ({ type, name, title, info ,onChange}: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value,"this is being typd")
        onChange(event.target.value); // Call the onChange callback with the input value
    };

    return (
    <>
      <Typography variant="h6" sx={{ marginTop: 1 }}>
        {title}
      </Typography>
      <Input
        type={type}
        name={name}
        disableUnderline={true}
        onChange={handleChange}
        sx={{
          backgroundColor: "#D9D9D9",
          width: 370,
          borderRadius: 5,
          paddingLeft: 3,
        }}
      />
      <Typography variant="body2">{info}</Typography>
    </>
  );
};

export default AppInput;
