import { useNote } from "../../Context/Note/note-context";

function NotesPanel() {
  const { userNotes, deleteNotes } = useNote();

  return (
    <>
      {userNotes.map((note) => {
        const { _id, noteText, color, noteTitle, tags } = note;
        return (
          <>
            <section
              key={_id}
              className=" m-y-5 flex text-color-0 wt-30 m-auto"
            >
              <div
                className={`box-shadow ${color} pd-5 flex flex-column  m-y-8 rounded-s position-rel`}
              >
                <div className="flex justify-btw pd-x-4 ">
                  <span className="text-m">{noteTitle}</span>
                  <button className="text-color-5 bg-black-0 rounded-full outline-none border-none pd-x-3 pd-y-2 cursor">
                    <i className="fa-solid fa-thumbtack text-color-9"></i>
                  </button>
                </div>
                <div className="m-y-1 flex items-start pd-5">
                  {noteText.innerText}
                </div>
                <div className="m-y-1 flex items-start pd-5">{tags}</div>
                <div className="flex justify-even  items-start m-y-3 ">
                  <span>created 4 April'22</span>

                  <button className="text-color-5 cursor rounded-full border-none  outline-none text-color-0 pd-x-3 pd-y-2">
                    <i className="fa-solid fa-palette text-color-9"></i>
                  </button>

                  <button
                    onClick={() => {
                      deleteNotes(note, _id);
                    }}
                    className="rounded-s cursor border-none  outline-none text-color-9 pd-x-6 pd-y-3"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button className=" rounded-s border-none cursor outline-none  pd-x-6 pd-y-3">
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
