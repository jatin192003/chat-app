import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';

export default function Home() {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="bg-base-300 h-[calc(100vh-66px)] flex overflow-hidden">
      {/* Show Sidebar or ChatWindow based on screen size and selected contact */}
      <div className={`w-full lg:w-1/3 ${selectedContact ? 'hidden lg:block' : ''}`}>
        <Sidebar onSelectContact={(contact) => setSelectedContact(contact)} />
      </div>
      <div className={`w-full lg:w-2/3 ${!selectedContact ? 'hidden lg:block' : ''}`}>
        {selectedContact ? (
          <ChatWindow contact={selectedContact} onBack={() => setSelectedContact(null)} />
        ) : (
          <div className="hidden lg:flex items-center justify-center text-center">
            <p className="text-xl font-semibold">Select a contact to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
}
