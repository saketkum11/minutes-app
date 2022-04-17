import React from "react";
import CardNote from "../../Component/Card-note/CardNote";
import Filter from "../../Component/Filter/Filter";
import NotesPanel from "../../Component/Note-Panel/notesPanel";
import Navbar from "../../Component/Sidenav/Navbar";
import { useFilter } from "../../Context/Filter-Context/Filter-Context";

import "../../Style/style.css";

function Notes() {
  const { setFilterFlag, filterFlag } = useFilter();
  return (
    <>
      <div className="container-grid">
        <Navbar></Navbar>
        <aside>
          <div className="m-auto">
            <input
              type="text"
              className="wt-50 pd-4  m-t-11 text-s rounded-m "
              placeholder="Search Your Notes"
            />
            <button
              onClick={() => {
                setFilterFlag((flag) => !flag);
              }}
              className="text-color-9  outline-none border-none pd-1 cursor "
            >
              <i className="fa-solid fa-filter"></i>
            </button>
            {filterFlag ? <Filter></Filter> : ""}
          </div>
          <CardNote></CardNote>
          <NotesPanel></NotesPanel>
        </aside>
      </div>
    </>
  );
}

export default Notes;
