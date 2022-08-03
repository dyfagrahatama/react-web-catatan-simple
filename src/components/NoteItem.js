import React from "react";
import NoteContent from "./NoteContent";
import NoteAction from "./NoteAction";

export default function NoteItem({ id, title, body, createdAt, archived, action }) {

    const onDeleteNotes = (item) => action((notes) => notes.filter((note) => note.id !== item));

    const onArsipNotes = (item) => {
        action((notes) =>
            notes.map((note) => {
                if (note.id === item) {
                    return { ...note, archived: !note.archived };
                }
                return note;
            }),
        );
    };

    return (
        <div className="note-item">
            <NoteContent
                title={title}
                body={body}
                createdAt={createdAt}
                archived={archived}
                action={action}
            />

            <NoteAction onDeleteNotes={onDeleteNotes} onArsipNotes={onArsipNotes} id={id} archived={archived} />
        </div>
    );
}