import { noteType } from "../type";
import { CardList } from "./cardList";

function ActiveNote({ notes, onDelete, onArchive }: { notes: noteType[]; onDelete: (id: number | string) => void; onArchive: (id: number | string) => void }) {
  return (
    <div className="active-note__container flex flex-col gap-y-4 text-lg font-medium w-full sm:w-3/4 sm:mx-auto">
      <span>Active Notes</span>
      <CardList notes={notes.filter((note) => !note.archieved)} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export { ActiveNote };
