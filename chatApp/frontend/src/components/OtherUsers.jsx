import React from 'react';
import OtherUser from './OtherUser';

export default function OtherUsers({ onSelectContact }) {
  const contacts = [
    { id: 1, name: 'Jatin Chhabra', avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
    // Add more contacts as needed
  ];

  return (
    <div className="overflow-y-auto h-[calc(100vh-170px)]">
      {contacts.map((contact) => (
        <OtherUser key={contact.id} contact={contact} onClick={() => onSelectContact(contact)} />
      ))}
    </div>
  );
}
