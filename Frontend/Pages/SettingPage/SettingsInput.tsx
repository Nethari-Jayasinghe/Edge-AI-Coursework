import { Input, Typography } from "@mui/material";
import React from "react";

interface Props {
  type: string;
  name: string;
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange handler
  info?: string;
}

const SettingsInput = ({ type, name, title, value, onChange, info }: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: 15 }}>
      <div style={{ marginBottom: 6, marginTop: 16 }}>
        <Typography variant="h6" sx={{ fontSize: 18, fontWeight: "400" }}>
          {title}
        </Typography>
      </div>
      <div>
        <Input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disableUnderline={true}
          sx={{
            backgroundColor: "rgba(233, 196, 125, 0.31)",
            width: 270,
            height: 30,
            borderRadius: 1,
          }}
        />
        <Typography variant="body2">{info}</Typography>
      </div>
    </div>
  );
};

export default SettingsInput;
