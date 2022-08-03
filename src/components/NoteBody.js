import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

export default function NoteBody({ noteActive, noteArsip, setNotes }) {
    return (
        <div className="note-app__body">
            <NoteInput setNotes={setNotes} />
            <NoteList label="Catatan yang Aktif" setNotes={setNotes} notes={noteActive} />
            <NoteList label="Catatan Arsip" setNotes={setNotes} notes={noteArsip} />
        </div>
    );
}