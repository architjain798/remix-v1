import { redirect } from "@remix-run/node";
import NewNote, { links as NewNoteLinks } from "~/components/NewNote";
import { getStoredNotes, storeNotes } from "~/data/notes";

export default function Notes() {
  return (
    <div>
      <NewNote />
    </div>
  );
}

export async function action({ request }) {
  console.log("Action called in notes route");
  console.log("Received data:", request);

  const formData = await request.formData();
  // const noteData = {
  //   title: formData.get("title"),
  //   content: formData.get("content"),
  // };
  const noteData = Object.fromEntries(formData);
  // Add the validation logic here

  const exisitingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = exisitingNotes.concat(noteData);
  console.log("Updated notes:", updatedNotes);
  await storeNotes(updatedNotes);

  return redirect("/notes");
}

export function links() {
  return [...NewNoteLinks()];
}
