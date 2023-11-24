import React, { useState } from "react";

// Addnotes component with Tailwind CSS styling and input bar
function Addnotes({ handleadd }) {
  const [addnote, setAddnote] = useState("");

  const handlechange = (event) => {
    setAddnote(event.target.value);
  };

  const handleClick = () => {
    // Placeholder functionality - add your logic here
    handleadd(addnote); // this handle add is created in the app component and is taking add note as a prop
    // Reset the input after handling the click
    setAddnote("");
  };

  return (
    <div className="max-w-md mx-auto bg-gray-200 text-gray-700 rounded-md overflow-hidden shadow-lg">
      {/* Heading Section */}
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Add a New Note</h1>
      </div>

      {/* Input Section */}
      <div className="p-4">
        <input
          type="text"
          className="w-full border p-3 rounded-md bg-transparent focus:outline-none"
          placeholder="Enter your new note here."
          onChange={handlechange}
          value={addnote}
        />
      </div>

      {/* Add Note Button Section */}
      <div className="flex justify-end p-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md "
          onClick={handleClick}
        >
          Add Note
        </button>
      </div>
    </div>
  );
}

export default Addnotes;
