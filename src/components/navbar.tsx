function Navbar({ filterNotes }: { filterNotes: (text: string) => void }) {
  return (
    <div className="navbar__container flex justify-between items-center px-10 py-4">
      <span className="navbar__title font-medium text-lg">Notes.</span>
      <input
        type="search"
        placeholder="Search notes..."
        className="navbar__input border-2 border-primary px-4 py-2 w-60 text-xs text-secondary outline-none placeholder:text-xs placeholder:text-secondary"
        onChange={(event) => filterNotes(event.target.value)}
      />
    </div>
  );
}

export { Navbar };
