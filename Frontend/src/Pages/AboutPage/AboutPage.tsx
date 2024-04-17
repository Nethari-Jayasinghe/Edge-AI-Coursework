import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import LogoutIcon from "../../Components/Assets/logout.png"
import Header from '../../Components/Header/Header'
import AboutBody from './AboutBody'
type Props = {}

const AboutPage = (props: Props) => {
  return (
    <div>
      
      <Sidebar/>
      <Header/>
      <AboutBody/>

    </div>
  )
}

export default AboutPage