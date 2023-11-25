import React, { useState } from "react";

// Addnotes component with Tailwind CSS styling and input bar
function Addnotes({ handleadd }) {
  // State to manage the text input
  const [addnote, setAddnote] = useState("");

  // Function to handle text input changes
  const handlechange = (event) => {
    // Check if the character limit is not exceeded
    if (CharacterLimit - event.target.value.length >= 0) {
      // Update the state with the new input value
      setAddnote(event.target.value);
    }
  };

  // Character limit for the note
  const CharacterLimit = 200;

  // Function to handle button click
  const handleClick = () => {
    // Check if the note is not empty
    if (addnote.trim().length > 0) {
      // Call the parent component function to add the note
      handleadd(addnote);
    }
    // Reset the input after handling the click
    setAddnote("");
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-200 text-gray-700 rounded-md overflow-hidden shadow-lg">
      {/* Heading Section */}
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Add a New Note</h1>
      </div>

      {/* Input Section */}
      <div className="p-4">
        <textarea
          rows="4"
          className="w-full border p-3 rounded-md bg-transparent focus:outline-none"
          placeholder="Enter your new note here."
          onChange={handlechange}
          value={addnote}
        />
      </div>

      {/* Remaining Characters Section */}
      <div>
        <p className="font-bold p-3">
          {CharacterLimit - addnote.length} remaining
        </p>
      </div>

      {/* Add Note Button Section */}
      <div className="flex justify-end p-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
          onClick={handleClick}
        >
          Add Note
        </button>
      </div>
    </div>
  );
}

export default Addnotes;
