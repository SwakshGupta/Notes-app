import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./assets/components/NoteList";
import Search from "./assets/components/Search";
import Header from "./assets/components/Header";

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

  const Addnote = (text) => {
    const date = new Date(); // this will create a new date object

    const NewNote = {
      id: nanoid(),

      text: text,

      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, NewNote]; // this will copy the notes and  replace it with new notes

    setNotes(newNotes);
  };

  const DeleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id); // it uses filter method to create new array  note id !=id if this conditin

    //is true then note is included otherwise the note is removed

    setNotes(newNote);
  };

  const [search, setSearch] = useState(""); // for the search button

  const [dark, setDark] = useState(false); // this will set the dark mode

  return (
    <>
      <div
        className={`bg-${dark ? "black" : "white"} text-${
          dark ? "white" : "black"
        } min-h-screen p-8 transition-colors duration-500 ease-in-out`} // this will set the dark mode to the application if dark is ture then set bg-black and text white and vice versa
      >
        {/* Heading for the notes section */}

        <div className={`${dark && "dark-mode"}`}>
          <Header DarkMode={setDark} />

          <Search handleSearch={setSearch} />

          {/* Render the NoteList component with the notes array as a prop */}
          <NoteList
            notes={notes.filter(
              (note) => note.text.toLowerCase().includes(search) // what it filter all the notes and will return those which have search in it
            )}
            handleadd={Addnote}
            handledel={DeleteNote}
          />
        </div>
      </div>
    </>
  );
}

export default App;

// we will pass a function to appnotes to update the state of add note jsx
