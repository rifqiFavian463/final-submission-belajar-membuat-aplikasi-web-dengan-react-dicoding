import "./App.css";
import { useState } from "react";
import { noteType } from "./type";
import { Navbar } from "./components/navbar";
import { NoteInput } from "./components/noteInput";
import { ActiveNote } from "./components/activeNote";
import { ArchiveNote } from "./components/archiveNote";
import { NoteBody } from "./components/noteBody";

const initialNotes: noteType[] = [
  {
    id: +new Date(),
    title: "Note 1",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    archieved: false,
    createdAt: new Date().toISOString(),
  },
];

function NotesApp() {
  const [notes, setNotes] = useState<noteType[]>(initialNotes);
  const [searchText, setSearchText] = useState<string>("");

  const addNote = (note: noteType) => setNotes((prevNotes) => [...prevNotes, note]);

  const deleteNote = (id: number | string) => setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));

  const archiveNote = (id: number | string) => setNotes((prevNotes) => prevNotes.map((note) => (note.id === id ? { ...note, archieved: true } : note)));

  const unarchiveNote = (id: number | string) => setNotes((prevNotes) => prevNotes.map((note) => (note.id === id ? { ...note, archieved: false } : note)));

  const handleFilterNotes = (text: string) => setSearchText(text);

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="note-app">
      <Navbar filterNotes={handleFilterNotes} />
      <NoteBody>
        <NoteInput addNote={addNote} />
        <ActiveNote notes={filteredNotes} onDelete={deleteNote} onArchive={archiveNote} />
        <ArchiveNote notes={filteredNotes} onDelete={deleteNote} onUnarchive={unarchiveNote} />
      </NoteBody>
    </div>
  );
}

export default NotesApp;
