import { useState } from "react";

import NoteList from "./assets/components/NoteList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" bg-black">
        <h1>Notes</h1>

        <NoteList />
      </div>
    </>
  );
}

export default App;
