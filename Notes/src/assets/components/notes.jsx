import React from "react";

function Notes({ id, date, text, handledel }) {
  return (
    <div className="max-w-lg mx-auto bg-yellow-100 border border-gray-300 rounded-md overflow-hidden shadow-lg">
      {/* Heading Section */}
      <div className="p-4 bg-yellow-200">
        <h1 className="text-2xl font-semibold italic text-yellow-800">
          Stylish Card
        </h1>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <p className="text-gray-800">{text}</p>
      </div>

      {/* Date Section */}
      <div className="p-3 text-sm text-gray-600">{date}</div>

      {/* Delete Button Section */}
      <div className="flex justify-end p-4">
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
          onClick={() => handledel(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Notes;
