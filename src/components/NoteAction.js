import React from "react";

export default function NoteAction({ onDeleteNotes, onArsipNotes, id, archived }) {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDeleteNotes(id)}>Hapus</button>
            <button className="note-item__archive-button" onClick={() => onArsipNotes(id)}>{archived ? "Pindah" : "Arsip"}</button>
        </div>
    )
}