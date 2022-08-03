import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, label, setNotes }) {
    return (
        <>
            <h2>{label}</h2>
            <div className="notes-list">
                {
                    notes.length === 0 ? (
                        <p className="notes-list__empty-message"><strong>Catatanmu Kosong!!</strong></p>
                    ) : (
                        notes.map((note) => (
                            <NoteItem action={setNotes} key={note.id} {...note} />
                        ))
                    )
                }
            </div>
        </>
    );
}