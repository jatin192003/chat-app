import React from 'react';

export default function OtherUser({ contact, onClick }) {
  return (
    <div onClick={onClick} className="hover:bg-base-300 cursor-pointer">
      <div className="flex items-center">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src={contact.avatar} alt={contact.name} />
          </div>
        </div>
        <div className="font-semibold px-5 text-base-content">{contact.name}</div>
      </div>
      <div className="divider m-1"></div>
    </div>
  );
}
