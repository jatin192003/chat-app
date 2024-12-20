import React from 'react';
import Message from './Message';

export default function Messages() {
  return (
    <div className="flex flex-col-reverse px-4 py-2 overflow-y-auto grow">
      <Message />
      {/* Add more messages here */}
    </div>
  );
}
