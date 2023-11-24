import React from "react";
import Notes from "./notes";
import Addnotes from "./Addnotes";

// NoteList component that receives an array of notes as a prop
function NoteList({ notes }) {
  return (
    <div className="flex flex-wrap">
      <h1 className="w-full text-center mb-4">
        This is the note list section of the page
      </h1>

      <div className="flex gap-4">
        {/* Mapping through the array of notes to render individual Note components */}
        {notes.map((note) => (
          // Each Note component receives a unique key, date, and text as props
          <Notes key={note.id} date={note.date} text={note.text} />
        ))}

        <Addnotes />
      </div>
    </div>
  );
}

export default NoteList;
