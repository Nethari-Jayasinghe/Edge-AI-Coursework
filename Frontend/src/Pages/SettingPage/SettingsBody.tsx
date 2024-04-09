import React from 'react'
import SettingsInput from './SettingsInput';
import { Button } from '@mui/material';

export default function SettingsBody(){
    return(
        <div style={{width: "100%", height: "100%", justifyContent: "flex-end", alignContent: "flex-end", display: "flex"}}>
           
            <div style={{ position: "absolute", top: 90,left:300, maxWidth: 1000, display:"flex",flexDirection:"row", }}>
                <p style={{fontSize:28,fontWeight:"500"}}>User Profile</p>
            </div>

            <div style={{ position: "absolute", top: 170,left:300, maxWidth: 1000, display:"flex",flexDirection:"row", }}>
                <p style={{fontSize:22,fontWeight:"500"}}>Change Password</p>
            </div>

            <div style={{ position: "absolute", top: 220,left:300, maxWidth: 1000, display:"flex",flexDirection:"column", }}>
                <SettingsInput name="name" type="name" title="Current Password" />
                <SettingsInput name="name" type="name" title="New Password" />
                <SettingsInput name="name" type="name" title="Confirm Password" />
            </div>

            <div style={{ position: "absolute", top: 520,left:300, maxWidth: 1000, }}>
                <Button style={{fontSize:15,fontWeight:"600",color:"#273240",backgroundColor:"#E9C47D",}}>Confirm</Button>
            </div>


        </div>
    );
}