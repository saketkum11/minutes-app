import { useNote } from "../../Context/Note/note-context";
import { useState } from "react";
import {
  SET_TITLE,
  SET_LABEL,
  COLOR,
  CLEAR,
  PRIORITY,
} from "../../Variable/variable";
function NotesPanel() {
  const {
    userNotes,
    deleteNotes,
    colors,
    notePriority,
    noteDispatch,
    noteState,
  } = useNote();
  const [newCard, setNewCard] = useState({
    colorPalette: false,
    label: false,
    priority: false,
  });
  console.log("new state", noteState);
  return (
    <>
      {userNotes &&
        userNotes.map((note) => {
          const { _id, noteText, color, noteTitle, tags, createdAt, priority } =
            note;
          return (
            <>
              <section key={_id} className=" m-y-5 flex text-color-0  ">
                <div
                  className={`box-shadow ${color} pd-5 flex flex-column  m-y-8 rounded-s position-rel wt-30 m-auto`}
                >
                  <div className="flex justify-btw pd-x-4 ">
                    <span className="text-m">{noteTitle}</span>
                    <button className="text-color-9 cursor rounded-full border-none  outline-none text-color-0 pd-x-3 pd-y-2">
                      <i className="fa-solid fa-thumbtack "></i>
                    </button>
                  </div>
                  <div className=" flex items-start pd-4 text-color-0">
                    {noteText}
                  </div>
                  <div className="flex items-start pd-4">{tags}</div>
                  <div className=" flex items-start pd-4">Date {createdAt}</div>
                  <div className=" flex items-start pd-4">{priority}</div>
                  <div className="flex justify-even  items-start m-y-3 ">
                    <button
                      title="rewrite"
                      className="text-color-5 cursor rounded-full border-none  outline-none text-color-9 pd-x-3 pd-y-2 "
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      title="color"
                      onClick={() =>
                        setNewCard({
                          ...newCard,
                          colorPalette: !newCard.colorPalette,
                        })
                      }
                      className="text-color-5 cursor rounded-full border-none  outline-none text-color-0 pd-x-3 pd-y-2"
                    >
                      <i className="fa-solid fa-palette text-color-9"></i>
                    </button>

                    <button
                      title="delete"
                      onClick={() => {
                        deleteNotes(note, _id);
                      }}
                      className="text-color-9 cursor rounded-full border-none  outline-none text-color-0 pd-x-3 pd-y-2"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                    <button
                      title="trash"
                      className=" text-color-9 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2"
                    >
                      <i className="fa-solid fa-trash-arrow-up"></i>
                    </button>
                  </div>
                </div>
              </section>

              {newCard.colorPalette ? (
                <div className="bg-black-1 flex wt-30 ">
                  <div className="flex justify-even pd-y-2">
                    {colors.map((allColor) => {
                      return (
                        <>
                          <button
                            key={allColor}
                            onClick={() => {
                              noteDispatch({ type: COLOR, payload: allColor });
                              updatedNote(userNotes);
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
            </>
          );
        })}{" "}
    </>
  );
}
export default NotesPanel;
