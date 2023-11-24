import React from "react";

// Addnotes component with Tailwind CSS styling
function Addnotes() {
  return (
    <div className="max-w-md mx-auto bg-gray-200 text-gray-700 rounded-md overflow-hidden shadow-lg">
      {/* Heading Section */}
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Add a New Note</h1>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <p>Enter your new note here.</p>
      </div>

      {/* Delete Button Section */}
      <div className="flex justify-end p-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md">
          Add Note
        </button>
      </div>
    </div>
  );
}

export default Addnotes;
