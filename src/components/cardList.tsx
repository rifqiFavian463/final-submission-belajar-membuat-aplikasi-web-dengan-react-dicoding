import { noteType } from "../type";
import { CardNote } from "./cardNote";

type CardListProps = {
  notes: noteType[];
  onDelete: (id: number | string) => void;
  onArchive?: (id: number | string) => void;
  onUnarchive?: (id: number | string) => void;
};

function CardList({ notes, onDelete, onArchive, onUnarchive }: CardListProps) {
  return (
    <div className={`card-list w-full flex flex-col sm:flex-row flex-wrap gap-y-2 gap-x-2 ${notes.length === 0 && "justify-center"}`}>
      {notes.length === 0 && <span className=" text-secondary font-normal">No notes found</span>}
      {notes.map((note) => (
        <CardNote key={note.title} note={note} deleteCard={onDelete} archiveCard={onArchive} unarchiveCard={onUnarchive} />
      ))}
    </div>
  );
}

export { CardList };
