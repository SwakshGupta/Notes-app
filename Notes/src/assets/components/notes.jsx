import React from "react";

function Notes() {
  return (
    <div className="max-w-md mx-auto bg-gray-200 text-gray-700 rounded-md overflow-hidden shadow-lg">
      {/* Heading Section */}
      <div className="p-4">
        <h1 className="text-2xl font-semibold">This is a Stylish Card</h1>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <p>Card content goes here.</p>
      </div>

      {/* Delete Button Section */}
      <div className="flex justify-end p-4">
        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Notes;
