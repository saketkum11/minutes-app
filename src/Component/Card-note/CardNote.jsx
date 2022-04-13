import { useNote } from "../../Context/Note/note-context";
import "../../Style/cardNote.css";
function CardNote() {
  const { getNotes, noteFooter, setNoteFooter } = useNote();
  return (
    <>
      {/* card component */}
      <section className=" m-y-5  wt-50 m-auto">
        <div className="box-shadow pd-5 flex flex-column  m-y-8 rounded-s position-rel">
          <div className="flex justify-btw pd-x-4 ">
            <input
              type="text"
              className="outline-none border-none text-lg pd-3"
              placeholder="Title"
            />
            <button className="text-color-5 bg-black-0 rounded-full outline-none border-none pd-x-3 pd-y-2 cursor">
              <i className="fa-solid fa-thumbtack"></i>
            </button>
          </div>
          <div className="flex items-start justify-around m-y-3">
            <button className="text-color-5 cursor rounded-full border-none  outline-none pd-x-3 pd-y-2">
              <i className="fa-solid fa-bold"></i>
            </button>
            <button className="text-color-5 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2">
              <i className="fa-solid fa-italic"></i>
            </button>
            <button className="text-color-5 cursor rounded-full border-none  outline-none text-color-0 pd-x-3 pd-y-2">
              <i className="fa-solid fa-underline"></i>
            </button>
            <button className="text-color-5 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2">
              <i className="fa-solid fa-quote-right"></i>
            </button>
            <button className="text-color-5 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2">
              <i className="fa-solid fa-text-slash"></i>
            </button>
            <button className="text-color-5 cursor rounded-full border-none  outline-none  pd-x-3 pd-y-2">
              <i className="fa-solid fa-link"></i>
            </button>
          </div>
          <div className="m-y-1 flex items-start pd-5">
            <input
              type="text"
              className="outline-none border-none text-m  pd-3"
              placeholder="Write Your note"
            />
          </div>
          <div className="flex justify-even  items-start m-y-3 ">
            <button
              onClick={() =>
                setNoteFooter({ ...noteFooter, label: !noteFooter.label })
              }
              className="text-color-5 cursor rounded-full border-none  outline-none text-color-0 pd-x-3 pd-y-2"
            >
              <i className="fa-solid fa-tag"></i>
            </button>

            <button
              onClick={() => {
                setNoteFooter({
                  ...noteFooter,
                  colorPalette: !noteFooter.colorPalette,
                });
              }}
              className="text-color-5 cursor rounded-full border-none  outline-none text-color-0 pd-x-3 pd-y-2"
            >
              <i className="fa-solid fa-palette"></i>
            </button>

            <button
              onClick={() => {
                getNotes();
              }}
              className="bg-purple-7 rounded-s cursor border-none  outline-none text-color-0 pd-x-6 pd-y-3"
            >
              Create
            </button>
            <button className="bg-pink-9 rounded-s border-none cursor outline-none text-color-0 pd-x-6 pd-y-3">
              Close
            </button>
          </div>
        </div>
        {/*colorPalette*/}
        {noteFooter.colorPalette ? (
          <div className="bg-black-1 flex justify-even  wt-20 flex-column">
            <div className="flex justify-even pd-y-2">
              <button className="h-fixed-4 cursor wt-fixed-4  bg-pink-9  rounded-full border-none   "></button>
              <button className=" h-fixed-4 cursor wt-fixed-4 bg-purple-9  rounded-full border-none outline-none  "></button>
              <button className="h-fixed-4 cursor wt-fixed-4  bg-green-9  rounded-full border-none  outline-none  "></button>
            </div>
            <div className="flex justify-even pd-y-2">
              <button className="h-fixed-4 cursor wt-fixed-4  bg-blue-9  rounded-full border-none  outline-none  "></button>
              <button className="h-fixed-4 cursor wt-fixed-4  bg-pink-5  rounded-full border-none  outline-none  "></button>
              <button className="h-fixed-4 cursor wt-fixed-4  bg-red-5  rounded-full border-none  outline-none  "></button>
            </div>
          </div>
        ) : (
          ""
        )}
        {/*Label*/}
        {noteFooter.label ? (
          <div className="bg-black-1 flex flex-wrap pd-2 wt-20  flex-column">
            <input type="text" className="wt-80 m-auto m-y-2 " onChange />
            <button className="bg-purple-7  rounded-s border-none wt-50 m-auto outline-none text-color-0 pd-x-3 pd-y-2 m-y-2">
              Label
            </button>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
export default CardNote;
