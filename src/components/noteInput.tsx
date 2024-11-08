import { noteType } from "../type";
import { useState } from "react";

function NoteInput({ addNote }: { addNote: (note: noteType) => void }) {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const maxChars = 50;
  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;
    if (input.length <= maxChars) {
      setTitle(input);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addNote({
      id: +new Date(),
      title,
      body,
      archieved: false,
      createdAt: new Date().toISOString(),
    });
  }

  return (
    <div className="note-input__container flex flex-col gap-y-2 items-center sm:w-96 sm:mx-auto">
      <div className="note-input__info flex justify-between">
        <span className="note-input__text text-5xl sm:text-6xl tracking-wide w-1/2">Create your note</span>
        <span className="note-input__text text-sm self-end text-end">Characters left : {maxChars - title.length}</span>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-y-2">
        <input
          className="note-input__title outline-none border-2 border-primary px-4 py-2 text-xs "
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title your note..."
        />
        <textarea
          className="note-input__body outline-none border-2 h-40 resize-none border-primary px-4 py-2 text-xs "
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Start writing your note..."
        />
        <button type="submit" className="note-input__save-button bg-primary text-sm text-white px-4 py-4">
          Save
        </button>
      </form>
    </div>
  );
}

export { NoteInput };
