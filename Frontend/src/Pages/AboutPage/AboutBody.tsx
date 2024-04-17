import React from 'react'
import aboutus from "./Aboutus.png"
import Elephant from "../../Components/Assets/Elephant.png"
export default function AboutBody(){
    return(
        <div style={{width: "100%", height: "100%", justifyContent: "flex-end", alignContent: "flex-end", display: "flex" }}>
            <div style={{width:1000,height:600,marginTop:30,marginRight:120,}}>
                <img style={{ width: "100%", height: "100%" }} src={aboutus} alt="About Us" />
            </div>
            <div style={{ position: "absolute", top: 100,left:500, maxWidth: 1000, display:"flex",flexDirection:"row", }}>
                <p style={{fontSize:24,fontWeight:"500"}}>Introducing Rumble,</p>
                    <div style={{marginTop:20,marginLeft:10}}>
                        <img style={{width:48,height:34}}src={Elephant}/>
                    </div>
                
            </div>
            <div style={{ position: "absolute", top: 170, right: 120, maxWidth: 1000, }}>
                <p style={{fontSize:24,marginLeft:120,marginRight:120,fontWeight:"500"}}>Our innovative solution designed to keep rural communities informed about the presence of wild elephants. Using advanced camera and vibrating sensor technology, Rumble detects these majestic creatures in real-time. Through our user-friendly web application, registered users receive instant alerts via both alarm notifications and SMS. Explore our intuitive dashboard to review detection timings and identify patterns, providing invaluable insights for safer coexistence with wildlife. Rumble is our commitment to ensuring rural areas remain vigilant and prepared in the face of diverse encounters with wild elephants.</p>
            </div>
        </div>
    );

}