import { noteType } from "../type";

type CardNoteProps = {
  note: noteType;
  deleteCard: (id: number | string) => void;
  archiveCard?: (id: number | string) => void;
  unarchiveCard?: (id: number | string) => void;
};

function CardNote({ note, deleteCard, archiveCard, unarchiveCard }: CardNoteProps) {
  const date: Date = new Date(note.createdAt);

  const idDayName = new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(date);
  const day = date.getDate();
  const idMonthName = new Intl.DateTimeFormat("id-ID", { month: "long" }).format(date);
  const year = date.getFullYear();

  return (
    <div className="card-note__container border border-primary px-4 py-2 flex flex-col justify-between w-80 h-72">
      <div className="card-note__detail">
        <h1 className="card-note__title font-medium">{note.title}</h1>
        <span className="card-note__date text-sm text-secondary">{`${idDayName}, ${day} ${idMonthName} ${year}`}</span>
        <p className="card-note__body text-sm font-normal mt-5">{note.body}</p>
      </div>
      <div className="card-note__buttons flex gap-x-2">
        <button className="card-note__delete-button bg-primary text-white text-sm px-4 py-2 w-1/2" onClick={() => deleteCard(note.id)}>
          Delete
        </button>
        <button className="card-note__archive-button border border-primary text-secondary text-sm px-4 py-2 w-1/2" onClick={() => (note.archieved ? unarchiveCard?.(note.id) : archiveCard?.(note.id))}>
          {note.archieved ? "Unarchive" : "Archive"}
        </button>
      </div>
    </div>
  );
}

export { CardNote };
