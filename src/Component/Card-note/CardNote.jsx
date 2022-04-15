import { useNote } from "../../Context/Note/note-context";
import { useState } from "react";
import { SET_TITLE, SET_LABEL, CLEAR, PRIORITY } from "../../Variable/variable";
import "../../Style/cardNote.css";
import Typographycal from "../Typographcal/Typographycal";
import Palette from "../Palette/Palette";
import Tags from "../Tags/Tags";
import Priority from "../Priority/Priority";
function CardNote() {
  const {
    createNotes,
    noteFooter,
    setNoteFooter,
    noteDispatch,
    notePriority,
    noteState,
  } = useNote();

  return (
    <>
      {/* card component */}
      <form
        className=" m-y-5  wt-50 m-auto"
        onSubmit={(e) => {
          e.preventDefault();
          createNotes(noteState);
        }}
      >
        <div className="box-shadow pd-5 flex flex-column  m-y-8 rounded-s position-rel">
          <div className="flex justify-btw pd-x-4 ">
            <input
              onChange={(e) => {
                noteDispatch({ type: SET_TITLE, payload: e.target.value });
              }}
              type="text"
              className="outline-none border-none text-lg pd-3"
              placeholder="Title"
            />
            <button className="text-color-5 bg-black-0 rounded-full outline-none border-none pd-x-3 pd-y-2 cursor">
              <i className="fa-solid fa-thumbtack"></i>
            </button>
          </div>
          <Typographycal></Typographycal>

          <div className="flex justify-even">
            <div className="flex justify-even  items-start m-y-3 ">
              <Tags></Tags>
              <Priority></Priority>
              <Palette></Palette>
            </div>
            <div className="flex justify-even  m-y-3 ">
              <button
                type="submit"
                className="bg-purple-7 rounded-s cursor border-none  outline-none text-color-0 pd-x-6 pd-y-3"
              >
                Create
              </button>
              <button
                onClick={() => {
                  noteDispatch({ type: CLEAR });
                }}
                className="bg-pink-9 rounded-s border-none cursor outline-none text-color-0 pd-x-6 pd-y-3"
              >
                clear
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default CardNote;
