import NewNote, { links as NewNoteLinks } from "~/components/NewNote";

export default function Notes() {
  return (
    <div>
      <NewNote />
    </div>
  );
}

export function links() {
  return [...NewNoteLinks()];
}
