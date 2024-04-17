import React from "react";
import elephant from "../../Components/Assets/Elephant.png"
import { Button } from "@mui/material";
import arrowdown from "../../Components/Assets/Arrowdown.png"
export default function DashboardBody(){
    return(
        <div style={{ width: "100%", height: "100%", justifyContent: "flex-end", alignContent: "flex-end", display: "flex" }}>
            <div style={{ position: "absolute", top: 90, left: 300,  display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{display:"flex", flexDirection:"row",justifyContent:"center",alignItems:"center",}}>
                    <p style={{ fontSize: 28, fontWeight: "500" }}>Welcome to Elephant Tracker !</p><img style={{width:48,height:34,marginLeft:11,}} src={elephant}/>
                </div>
            </div>

            <div style={{ position: "absolute", top: 200, left: 300, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{width:1100,height:400,backgroundColor:"#DC9C2342",}}>

                    <div style={{justifyContent:"space-between",display:"flex",flexDirection:"row",marginTop:40,}}>
                    <p style={{ marginLeft:60,fontSize:18,fontWeight:"500",}}>Elephant Traffic Tracker</p>
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",}}>
                        <p style={{fontSize:18,fontWeight:"500",}}>Filter by:</p>
                        <Button style={{marginLeft: 18,marginRight:60,backgroundColor: "#DC9D2391", fontSize: 18, fontWeight: "500", color: "black", height: 40, width: 99 }}>
                            Week 
                            <img src={arrowdown}/>  
                        </Button>
                    </div>
                    </div>

                </div>
            </div>


            <div style={{ position: "absolute", top: 650, left: 300,  display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{width:1100,height:220,backgroundColor:"#DC9C2342",marginBottom:50,}}>

                    <div style={{justifyContent:"space-between",display:"flex",flexDirection:"row",marginTop:40,}}>
                    <p style={{ marginLeft:60,fontSize:18,fontWeight:"500",}}>Total Elephants detected</p>
                    <p style={{ fontSize:18,fontWeight:"500",}}>Latest Time Frame</p>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",}}>
                        <Button style={{marginLeft: 18,marginRight:60,backgroundColor: "#DC9D2391", fontSize: 18, fontWeight: "500", color: "black", height: 60, width: 220,marginBottom:20,}}>
                            Check History
                        </Button>
                        <Button style={{marginLeft: 18,marginRight:60,backgroundColor: "#DC9D2391", fontSize: 18, fontWeight: "500", color: "black", height: 60, width: 220  }}>
                            Location
                        </Button>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
}