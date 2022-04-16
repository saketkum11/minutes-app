import { useNote } from "../../Context/Note/note-context";
import { COLOR } from "../../Variable/variable";
import { useState } from "react";
function Palette() {
  const { createNotes, noteDispatch, notePriority, noteState, colors } =
    useNote();
  const [colorFlag, setColorFlag] = useState(false);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setColorFlag((flag) => !flag);
          }}
          className="text-color-9 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2"
        >
          <i className="fa-solid fa-palette"></i>
        </button>
      </div>
      {/*colorPalette*/}

      {colorFlag ? (
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
    </>
  );
}

export default Palette;
