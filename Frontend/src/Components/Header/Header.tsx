import React from 'react'
import LogoutIcon from "../Assets/logout.png"
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div style={{width:"100%",height:"100% ",borderBottomStyle: "solid",borderBottomWidth:0.5,borderBottomColor:"#C8CBD9"}}>
            <div style={{display:"flex",flexDirection:"row", alignItems:"center",justifyContent:"end",}}>
                <Link to="/login">
                <img  style={{marginRight:30,marginTop:10,marginBottom:10,}} src={LogoutIcon}/>
                </Link>
            </div>
        </div>
    );

}