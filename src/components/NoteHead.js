import React from "react";
import Input from "./Input";

export default function NoteHead({ search, setQuery }) {
    return (
        <div className="note-app__header">
            <h1>Grahatama's Notes</h1>
            <div className="note-search">
                <Input
                    value={search}
                    onChange={setQuery}
                    type='search'
                    id='search_note'
                    name='search_note'
                    placeholder="Sedang mencari catatan ..." />
            </div>
        </div>
    );
}