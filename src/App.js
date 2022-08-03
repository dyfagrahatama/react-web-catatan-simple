import { useState, useEffect } from "react";
import { getInitialData } from "./utils/index";
import NoteHead from "./components/NoteHead";
import NoteBody from "./components/NoteBody";

function App() {
    const [query, setQuery] = useState("");
    const [findNote, setFindNote] = useState([]);
    const [notes, setNotes] = useState(getInitialData());

    const noteActive = (findNote || notes).filter((note) => !note.archived);
    const noteArsip = (findNote || notes).filter((note) => note.archived);

    useEffect(() => {
        setFindNote(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
    }, [query, notes]);

    return (
        <div className="note-app" >
            <NoteHead search={query} setQuery={setQuery} />
            <NoteBody noteActive={noteActive} noteArsip={noteArsip} setNotes={setNotes} />
        </div>
    );

}

export default App;
