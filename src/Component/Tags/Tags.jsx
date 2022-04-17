import { useNote } from "../../Context/Note/note-context";
import { SET_LABEL } from "../../Variable/variable";
import { useState } from "react";
function Tags() {
  const { noteDispatch } = useNote();
  const [newLabel, setNewLabel] = useState("");
  const [labelFlag, setLabelFlag] = useState(false);
  return (
    <>
      {" "}
      <div>
        <button
          onClick={() => {
            setLabelFlag((flag) => !flag);
          }}
          className="text-color-9 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2"
        >
          <i className="fa-solid fa-tag"></i>
        </button>
      </div>
      {labelFlag ? (
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
    </>
  );
}

export default Tags;
