import React from "react";
import { useNote } from "../../Context/Note/note-context";
import { COLOR } from "../../Variable/variable";
function Palette() {
  const {
    createNotes,
    noteFooter,
    setNoteFooter,
    noteDispatch,
    notePriority,
    noteState,
    colors,
  } = useNote();
  return (
    <>
      <div>
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
      </div>
      {/*colorPalette*/}

      {noteFooter.colorPalette && (
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
      )}
    </>
  );
}

export default Palette;
