import { Form, useActionData, useNavigation } from "@remix-run/react";
import styles from "./NewNote.css";

function NewNote() {
  const navigation = useNavigation();

  const data = useActionData();

  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post" id="note-form">
      {data?.message && <p>{data.message}</p>}
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" required />
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Add Note"}
        </button>
      </div>
    </Form>
  );
}

export default NewNote;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
