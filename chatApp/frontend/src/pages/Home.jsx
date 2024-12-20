import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatWindow from '../components/ChatWindow'

export default function Home() {
  return (
    <div className='bg-base-300 h-[calc(100vh-66px) flex overflow-hidden]'>
      <Sidebar/>
      <ChatWindow/>
    </div>
  )
}
