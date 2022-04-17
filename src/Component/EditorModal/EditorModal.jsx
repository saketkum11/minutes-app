import React, { useState } from "react";
import "../EditorModal/EditorModal.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNote } from "../../Context/Note/note-context";

function EditorModal({ note }) {
  const { _id, noteText, color, noteTitle, tags, createdAt, priority } = note;
  const [editorUpdate, setEditorUpdate] = useState(note);
  const {
    formats,
    modules,
    notePriority,
    colors,
    updatedNote,
    newFlag,
    setNewFlag,
  } = useNote();
  const [editoralFlag, setEditoralFlag] = useState({
    colorFlag: false,
    priorityFlag: false,
    tagFlag: false,
    editorialTagValue: [],
  });

  return (
    <>
      <div
        key={_id}
        className="bg-transprant wt-100 z-index-1 m-auto justify-around flex flex-column pd-4 m-y-8  box-shadow-2"
      >
        <div className=" m-y-5  wt-100 m-auto">
          <div
            className={`box-shadow pd-5 flex flex-column ${editorUpdate.color}  m-y-8 rounded-s position-rel`}
          >
            <div className="flex justify-btw pd-x-4 ">
              <input
                type="text"
                className="outline-none border-none text-lg wt-50 pd-3"
                placeholder="Title"
                onChange={(e) =>
                  setEditorUpdate({
                    ...editorUpdate,
                    noteTitle: e.target.value,
                  })
                }
              />
            </div>
            <ReactQuill
              theme="snow"
              onChange={(value) => {
                setEditorUpdate({
                  ...editorUpdate,
                  noteText: value,
                });
              }}
              modules={modules}
              formats={formats}
              placeholder="write note"
            />
            <div className="flex justify-even  items-start m-y-3 ">
              <div>
                <button
                  onClick={() => {
                    setEditoralFlag({
                      ...editoralFlag,
                      tagFlag: !editoralFlag.tagFlag,
                    });
                  }}
                  className="text-color-9 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2"
                >
                  <i className="fa-solid fa-tag"></i>
                </button>
              </div>
              {editoralFlag.tagFlag ? (
                <div className="bg-black-1 flex flex-wrap pd-2 wt-20  flex-column">
                  <input
                    type="text"
                    className="wt-80 m-auto m-y-2 cursor"
                    onChange={(e) => {
                      setEditoralFlag({
                        ...editoralFlag,
                        editorialTagValue: e.target.value,
                      });
                    }}
                  />
                  <button
                    onClick={() => {
                      setEditorUpdate({
                        ...editorUpdate,
                        tags: [...tags, editoralFlag.editorialTagValue],
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
              <div>
                <button
                  onClick={() => {
                    setEditoralFlag({
                      ...editoralFlag,
                      priorityFlag: !editoralFlag.priorityFlag,
                    });
                  }}
                  className="text-color-9 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2"
                >
                  <i class="fa-solid fa-circle-chevron-down"></i>
                </button>
              </div>
              {editoralFlag.priorityFlag ? (
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
                              setEditorUpdate({
                                ...editorUpdate,
                                priority: priority,
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
              <div>
                <button
                  onClick={() => {
                    setEditoralFlag({
                      ...editoralFlag,
                      colorFlag: !editoralFlag.colorFlag,
                    });
                  }}
                  className="text-color-9 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2"
                >
                  <i className="fa-solid fa-palette"></i>
                </button>
              </div>
              {/*colorPalette*/}

              {editoralFlag.colorFlag ? (
                <div className="bg-black-1 flex wt-30 ">
                  <div className="flex justify-even pd-y-2">
                    {colors.map((allColor) => {
                      return (
                        <>
                          <button
                            key={allColor}
                            onClick={() => {
                              setEditorUpdate({
                                ...editorUpdate,
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
            </div>
            <div className="flex justify-even">
              <div className="flex justify-end items-center m-t-2">
                <button
                  onClick={() => {
                    updatedNote({ ...editorUpdate });
                  }}
                  class="bg-purple-8 cursor rounded-s border-none  outline-none text-color-0 pd-x-3 pd-y-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setNewFlag({ ...newFlag, modal: !newFlag.modal });
                  }}
                  class="bg-red-9 rounded-s cursor border-none  outline-none text-color-0 pd-x-3 pd-y-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditorModal;
