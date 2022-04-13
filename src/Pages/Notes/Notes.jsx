import React from "react";
import CardNote from "../../Component/Card-note/CardNote";
import NotesPanel from "../../Component/Note-Panel/notesPanel";
import Navbar from "../../Component/Sidenav/Navbar";
import { useNote } from "../../Context/Note/note-context";
import "../../Style/style.css";
function Notes() {
  const { userNotes } = useNote();
  return (
    <>
      <div className="container-grid">
        <Navbar></Navbar>
        <aside>
          <div>
            <input
              type="text"
              className="wt-50 pd-4  m-t-11 text-s rounded-m "
              placeholder="Take Notes"
            />
          </div>
          <CardNote></CardNote>
          {userNotes &&
            useNote.map((notes) => {
              return (
                <>
                  <NotesPanel key={notes.id} note={notes}></NotesPanel>
                </>
              );
            })}
        </aside>
      </div>
    </>
  );
}

export default Notes;
