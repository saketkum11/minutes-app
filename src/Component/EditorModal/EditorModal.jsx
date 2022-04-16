import React, { useState } from "react";
import "../EditorModal/EditorModal.css";
import Palette from "../Palette/Palette";
import Priority from "../Priority/Priority";
import Tags from "../Tags/Tags";
import Typographycal from "../Typographcal/Typographycal";

function EditorModal({ note }) {
  const { _id, noteText, color, noteTitle, tags, createdAt, priority } = note;
  const [editorUpdate, setEditorUpdate] = useState(note);
  return (
    <>
      <div
        key={_id}
        className="bg-transprant wt-100 z-index-1 m-auto justify-around flex flex-column pd-4 m-y-8  box-shadow-2"
      >
        <div className=" m-y-5  wt-100 m-auto">
          <div className="box-shadow pd-5 flex flex-column  m-y-8 rounded-s position-rel">
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
            <Typographycal></Typographycal>
            <div className="flex justify-even  items-start m-y-3 ">
              <Tags></Tags>
              <Priority></Priority>
              <Palette></Palette>
            </div>
            <div className="flex justify-even">
              <div className="flex justify-end items-center m-t-2">
                <button class="bg-purple-8 rounded-s border-none  outline-none text-color-0 pd-x-3 pd-y-2">
                  Edit
                </button>
                <button class="bg-red-9 rounded-s border-none  outline-none text-color-0 pd-x-3 pd-y-2">
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
