import React from "react";

function Search({ handleSearch }) {
  return (
    <div className="mb-4">
      <label
        htmlFor="search"
        className="block text-sm font-medium  m-5"
      ></label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Enter search term"
        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;
