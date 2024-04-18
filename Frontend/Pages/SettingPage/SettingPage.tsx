import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import SettingsBody from './SettingsBody'

type Props = {}

const SettingPage = (props: Props) => {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <SettingsBody/>
    </div>
  )
}

export default SettingPage