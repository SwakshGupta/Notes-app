import React from "react";

function Header({ DarkMode }) {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-semibold">Notes</h1>

      <button
        className="bg-gray-400 hover:bg-gray-500 text-gray-800 px-4 py-2 rounded-md "
        onClick={() => DarkMode((prev) => !prev)} // this will change  dark mode to true and flase when we click on it
      >
        Toggle mode
      </button>
    </div>
  );
}

export default Header;
