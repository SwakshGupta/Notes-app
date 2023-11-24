import React from "react";
import Notes from "./notes";
import Addnotes from "./Addnotes";

// NoteList component that receives an array of notes as a prop
function NoteList({ notes, handleadd }) {
  return (
    <div className="flex flex-wrap justify-center p-4">
      <h1 className="w-full text-center text-2xl font-semibold mb-4">
        This is the note list section of the page
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl mx-auto">
        {/* Mapping through the array of notes to render individual Note components */}
        {notes.map((note) => (
          // Each Note component receives a unique key, date, and text as props
          <Notes key={note.id} date={note.date} text={note.text} />
        ))}

        <Addnotes handleadd={handleadd} />
      </div>
    </div>
  );
}

export default NoteList;
