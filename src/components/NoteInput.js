import { useState } from "react";
import Input from "./Input";

export default function NoteInput({ setNotes }) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        const timestamp = new Date().toISOString();

        setNotes((notes) => [
            ...notes,
            { id: timestamp, title: title, body: body, archived: false, createdAt: timestamp },
        ]);
    };


    return (
        <div className="note-input">
            <h2>Buat Catatan</h2>
            <form onSubmit={onSubmitEventHandler}>
                <p className="note-input__title__char-limit">Sisa maks karakter: {50 - title.length}</p>
                <Input
                    value={title}
                    onChange={setTitle}
                    id='title'
                    name='title'
                    type="text"
                    placeholder="Isi Judul Bukumu!"
                    required
                />
                <Input
                    value={body}
                    onChange={setBody}
                    id="body"
                    name="body"
                    type='textarea'
                    placeholder="Isilah Catatan Disini!"
                    required
                />
                <button type="submit">Buat</button>
            </form>
        </div>
    );
}