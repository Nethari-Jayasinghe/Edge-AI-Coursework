import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import HistoryBody from './HistoryBody'

type Props = {}

const HistoryPage = (props: Props) => {
  return (
    <div>
      <Sidebar />
      <Header/>
      <HistoryBody/>
    
    </div>
  )
}

export default HistoryPage