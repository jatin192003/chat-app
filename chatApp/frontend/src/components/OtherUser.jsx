import React from 'react'

export default function OtherUser() {
    return (
        <div>
            <div className='hover:bg-base-300'>
                <div className='flex items-center'>
                    <div className="avatar online">
                        <div className="w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className='font-semibold px-5 text-base-content'>
                        Jatin Chhabra
                    </div>
                </div>
                
            </div>
            <div className='divider m-1'></div>
        </div>
    )
}
