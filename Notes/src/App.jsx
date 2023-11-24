import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./assets/components/NoteList";

function App() {
  // Initial state with an array of notes
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is going to be my first note",
      date: "12/4/2023",
    },
    {
      id: nanoid(),
      text: "This is going to be my second note",
      date: "12/4/2023",
    },
    {
      id: nanoid(),
      text: "This is going to be my third note",
      date: "12/4/2023",
    },
    {
      id: nanoid(),
      text: "This is going to be my fourth note",
      date: "12/4/2023",
    },
  ]);

  return (
    <>
      <div className="bg-sky-200 text-black min-h-screen p-8">
        {/* Heading for the notes section */}
        <h1 className="text-3xl font-semibold mb-4">Notes</h1>

        {/* Render the NoteList component with the notes array as a prop */}
        <NoteList notes={notes} />
      </div>
    </>
  );
}

export default App;
