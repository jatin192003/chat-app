import React from 'react'
import { BsSend } from 'react-icons/bs'
import { LuSendHorizontal } from 'react-icons/lu'

export default function ChatInputBox() {
    return (
        <div>
            <div className='p-3'>
                <label className="input input-bordered flex items-center">
                    <input type="text" className="grow" placeholder="Type Your Message Here..." />
                    <div className='cursor-pointer text-2xl'>
                        <LuSendHorizontal></LuSendHorizontal>
                    </div>
                </label>
            </div>
        </div>
    )
}
