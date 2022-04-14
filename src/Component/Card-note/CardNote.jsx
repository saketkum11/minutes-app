import { useNote } from "../../Context/Note/note-context";
import { useState } from "react";
import {
  SET_TITLE,
  SET_LABEL,
  COLOR,
  CLEAR,
  PRIORITY,
} from "../../Variable/variable";
import "../../Style/cardNote.css";
import Typographycal from "../Typographcal/Typographycal";
function CardNote() {
  const {
    createNotes,
    noteFooter,
    setNoteFooter,
    noteDispatch,
    notePriority,
    noteState,
    colors,
  } = useNote();

  const [newLabel, setNewLabel] = useState("");

  return (
    <>
      {/* card component */}
      <section className=" m-y-5  wt-50 m-auto">
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

          <div className="flex justify-even  items-start m-y-3 ">
            <button
              onClick={() =>
                setNoteFooter({ ...noteFooter, label: !noteFooter.label })
              }
              className="text-color-5 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2"
            >
              <i className="fa-solid fa-tag"></i>
            </button>
            <button
              onClick={() =>
                setNoteFooter({ ...noteFooter, priority: !noteFooter.priority })
              }
              className="text-color-9 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2"
            >
              <i class="fa-solid fa-angle-up"></i>
            </button>
            <button
              onClick={() => {
                setNoteFooter({
                  ...noteFooter,
                  colorPalette: !noteFooter.colorPalette,
                });
              }}
              className="text-color-9 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2"
            >
              <i className="fa-solid fa-palette"></i>
            </button>

            <button
              onClick={() => {
                createNotes(noteState);
              }}
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
        {/*colorPalette*/}

        {noteFooter.colorPalette ? (
          <div className="bg-black-1 flex wt-30 ">
            <div className="flex justify-even pd-y-2">
              {colors.map((allColor) => {
                return (
                  <>
                    <button
                      key={allColor}
                      onClick={() => {
                        noteDispatch({ type: COLOR, payload: allColor });
                      }}
                      className={`h-fixed-4  cursor wt-fixed-4  ${allColor} rounded-full border-none`}
                    ></button>
                  </>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
        {/*Label*/}
        {noteFooter.label ? (
          <div className="bg-black-1 flex flex-wrap pd-2 wt-20  flex-column">
            <input
              type="text"
              className="wt-80 m-auto m-y-2 cursor"
              onChange={(e) => {
                setNewLabel(e.target.value);
              }}
            />
            <button
              onClick={() => {
                noteDispatch({ type: SET_LABEL, payload: newLabel });
              }}
              className="bg-purple-7 cursor rounded-s border-none wt-50 m-auto outline-none text-color-0 pd-x-3 pd-y-2 m-y-2"
            >
              Label
            </button>
          </div>
        ) : (
          ""
        )}
        {noteFooter.priority ? (
          <div className="bg-black-1 flex  pd-2 wt-20 flex-column ">
            {notePriority.map((priority) => {
              return (
                <>
                  <label htmlFor={priority}>
                    <input
                      key={priority}
                      id={priority}
                      type="radio"
                      name="priority"
                      className="wt-80 m-auto m-y-2 cursor"
                      onClick={() => {
                        noteDispatch({
                          type: PRIORITY,
                          payload: priority,
                        });
                      }}
                    />
                    {priority}
                  </label>
                </>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
export default CardNote;
