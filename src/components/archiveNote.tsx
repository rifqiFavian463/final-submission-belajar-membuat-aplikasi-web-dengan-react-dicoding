import { noteType } from "../type";

import { CardList } from "./cardList";

function ArchiveNote({ notes, onDelete, onUnarchive }: { notes: noteType[]; onDelete: (id: number | string) => void; onUnarchive: (id: number | string) => void }) {
  return (
    <div className="active-note__container flex flex-col gap-y-4 text-lg font-medium w-full sm:w-3/4 sm:mx-auto">
      <span>Archive Notes</span>
      <CardList notes={notes.filter((note) => note.archieved === true)} onDelete={onDelete} onUnarchive={onUnarchive} />
    </div>
  );
}

export { ArchiveNote };
