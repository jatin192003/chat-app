import React from 'react'
import ChatInputBox from './ChatInputBox'
import Messages from './Messages'

export default function ChatWindow() {
    return (
        <div className='flex flex-col h-[calc(100vh-66px)] w-full '>
            <div className='px-3 py-3 bg-base-content'>
                <div className='flex items-center'>
                    <div className="avatar online">
                        <div className="w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className='font-semibold px-5 text-base-100'>
                        Jatin Chhabra
                    </div>
                </div>
            </div>
            <Messages/>
            <ChatInputBox/>
        </div>
    )
}
