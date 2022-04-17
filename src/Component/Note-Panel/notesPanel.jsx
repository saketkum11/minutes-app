import { useNote } from "../../Context/Note/note-context";
import { useState } from "react";
import { COLOR, PRIORITY } from "../../Variable/variable";
import EditorModal from "../EditorModal/EditorModal";
import Moment from "react-moment";
import { useFilter } from "../../Context/Filter-Context/Filter-Context";
function NotesPanel() {
  const {
    userNotes,
    deleteNotes,
    colors,
    notePriority,
    noteDispatch,
    noteState,
    updatedNote,
    newFlag,
    setNewFlag,
  } = useNote();
  const { filteredData } = useFilter();
  const [updatedTag, setUpdatedTag] = useState("");

  return (
    <>
      {filteredData.map((note) => {
        const { _id, noteText, color, noteTitle, createdAt, tags, priority } =
          note;
        return (
          <>
            <section key={_id} className=" m-y-5 flex text-color-0 wt-100 ">
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
                <div className=" flex items-start pd-4 ">
                  <Moment fromNow></Moment>
                </div>
                <div className=" flex items-start pd-4">{priority}</div>
                <div className="flex  justify-even  items-start m-y-3 ">
                  <button
                    onClick={() => {
                      setNewFlag({ ...newFlag, modal: !newFlag.modal });
                    }}
                    title="rewrite"
                    className="text-color-5 cursor rounded-full border-none  outline-none text-color-9 pd-x-3 pd-y-2 "
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  {/*EditorModal*/}
                  {newFlag.modal ? (
                    <EditorModal
                      key={_id}
                      note={note}
                      setNewFlag={setNewFlag}
                    ></EditorModal>
                  ) : (
                    ""
                  )}
                  <button
                    title="label"
                    onClick={() => {
                      setNewFlag({ ...newFlag, newTag: !newFlag.newTag });
                    }}
                    className="text-color-5 cursor rounded-full border-none  outline-none text-color-9 pd-x-3 pd-y-2 "
                  >
                    <i className="fa-solid fa-tag"></i>
                  </button>
                  {/* labels*/}
                  {newFlag.newTag ? (
                    <div className="bg-black-1 flex flex-wrap pd-2 wt-20  flex-column">
                      <input
                        type="text"
                        className="wt-80 m-auto m-y-2 cursor"
                        onChange={(e) => {
                          setUpdatedTag(e.target.value);
                        }}
                      />
                      <button
                        onClick={() => {
                          updatedNote({
                            ...note,
                            tags: [...note.tags, updatedTag],
                          });
                        }}
                        className="bg-purple-7 cursor rounded-s border-none wt-50 m-auto outline-none text-color-0 pd-x-3 pd-y-2 m-y-2"
                      >
                        Label
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                  <button
                    onClick={() => {
                      setNewFlag({
                        ...newFlag,
                        newPriority: !newFlag.newPriority,
                      });
                    }}
                    title="priority"
                    className="text-color-5 cursor rounded-full border-none  outline-none text-color-9 pd-x-3 pd-y-2 "
                  >
                    <i class="fa-solid fa-circle-chevron-down"></i>
                  </button>

                  {/*priority*/}
                  {newFlag.newPriority ? (
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
                                  updatedNote({ ...note, priority: priority });
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
                  <button
                    onClick={() => {
                      console.log("click");
                      setNewFlag({ ...newFlag, newColor: !newFlag.newColor });
                    }}
                    title="color"
                    className="text-color-5 cursor rounded-full border-none  outline-none text-color-0 pd-x-3 pd-y-2"
                  >
                    <i className="fa-solid fa-palette text-color-9"></i>
                  </button>
                  {/* color palette*/}
                  {newFlag.newColor ? (
                    <div className="bg-black-9 flex wt-50 ">
                      <div className="flex justify-even pd-y-2">
                        {colors.map((allColor) => {
                          return (
                            <>
                              <button
                                key={allColor}
                                onClick={() => {
                                  updatedNote({
                                    ...note,
                                    color: allColor,
                                  });
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
                  <button
                    onClick={() => {
                      deleteNotes(note);
                    }}
                    title="delete"
                    className="text-color-9 cursor rounded-full border-none  outline-none text-color-0 pd-x-3 pd-y-2"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button
                    onClick={() => {}}
                    title="trash"
                    className=" text-color-9 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2"
                  >
                    <i className="fa-solid fa-trash-arrow-up"></i>
                  </button>
                </div>
              </div>
            </section>
          </>
        );
      })}{" "}
    </>
  );
}
export default NotesPanel;
