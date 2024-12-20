import React from 'react';
import ChatInputBox from './ChatInputBox';
import Messages from './Messages';

export default function ChatWindow({ contact, onBack }) {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="px-3 py-3 bg-base-content flex items-center">
        <button className="btn btn-sm btn-ghost lg:hidden text-base-100" onClick={onBack}>
          Back
        </button>
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src={contact.avatar} alt={contact.name} />
          </div>
        </div>
        <div className="font-semibold px-5 text-base-100">{contact.name}</div>
      </div>
      <Messages />
      <ChatInputBox />
    </div>
  );
}
