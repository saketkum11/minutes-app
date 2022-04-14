import { useNote } from "../../Context/Note/note-context";
import { FONT } from "../../Variable/variable";
function Typographycal() {
  const { noteDispatch, noteState } = useNote();
  const typoGraph = [
    "bold",
    "italic",
    "underline",
    "quote-right",
    "text-slash",
    "link",
  ];
  return (
    <>
      <div className="flex items-start justify-around m-y-3">
        {typoGraph.map((fontType) => {
          <button
            onClick={() => {
              noteDispatch({ type: FontFace, payload: fontType });
            }}
            className="text-color-5 cursor rounded-full border-none  outline-none pd-x-3 pd-y-2"
          >
            <i className={`fa-solid fa-${fontType}`}></i>
          </button>;
        })}
      </div>
    </>
  );
}
export default Typographycal;
