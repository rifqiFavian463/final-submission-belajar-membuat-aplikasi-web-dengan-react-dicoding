import React from "react";

function NoteBody({ children }: { children: React.ReactNode }) {
  return <div className="py-20 px-3 flex flex-col gap-y-20">{children}</div>;
}

export { NoteBody };
