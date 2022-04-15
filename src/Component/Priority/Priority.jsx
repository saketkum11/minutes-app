import { useNote } from "../../Context/Note/note-context";
import { PRIORITY } from "../../Variable/variable";
function Priority() {
  const { noteFooter, setNoteFooter, noteDispatch, notePriority, noteState } =
    useNote();

  return (
    <>
      <div>
        <button
          onClick={() => {}}
          className="text-color-9 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2"
        >
          <i className="fa-solid fa-palette"></i>
        </button>
      </div>
      {noteFooter.priority && (
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
      )}
    </>
  );
}
export default Priority;
