import React from 'react';
import OtherUsers from './OtherUsers';

export default function Sidebar({ onSelectContact }) {
  return (
    <div className="flex flex-col h-full w-full bg-base-200 p-5">
      <div>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="divider"></div>
      <div className="px-3">
        <OtherUsers onSelectContact={onSelectContact} />
      </div>
    </div>
  );
}
