import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light"); // Default theme

  // Available themes
  const themes = ["light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset"];

  // Function to change theme
  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    // Set theme in localStorage so it's persisted across reloads
    localStorage.setItem("theme", selectedTheme);
  };

  // Use effect to apply the theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply the theme to the body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        {/* Theme Selection Dropdown */}
        <div className="dropdown dropdown-end ml-4">
          <button className="btn btn-ghost">Choose Theme</button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow over h-[calc(100vh-100px)]"
          >
            {themes.map((themeName) => (
              <li key={themeName}>
                <button
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => changeTheme(themeName)}
                >
                  {themeName.charAt(0).toUpperCase() + themeName.slice(1)} {/* Capitalize theme names */}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
