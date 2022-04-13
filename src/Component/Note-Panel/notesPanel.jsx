function NotesPanel({ notes }) {
  const { id, title, body, date } = notes;
  return (
    <>
      <section className=" m-y-5  wt-30 m-auto">
        <div class="box-shadow pd-5 flex flex-column  m-y-8 rounded-s position-rel">
          <div class="flex justify-btw pd-x-4 ">
            <span className="text-m">{title}</span>
            <button class="text-color-5 bg-black-0 rounded-full outline-none border-none pd-x-3 pd-y-2 cursor">
              <i class="fa-solid fa-thumbtack"></i>
            </button>
          </div>
          <div class="m-y-1 flex items-start pd-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              magnam.
            </p>
          </div>
          <div class="flex justify-even  items-start m-y-3 ">
            <span>created 4 April'22</span>

            <button class="text-color-5 cursor rounded-full border-none  outline-none text-color-0 pd-x-3 pd-y-2">
              <i class="fa-solid fa-palette"></i>
            </button>

            <button class="rounded-s cursor border-none  outline-none text-color-9 pd-x-6 pd-y-3">
              <i class="fas fa-trash-alt"></i>
            </button>
            <button class=" rounded-s border-none cursor outline-none  pd-x-6 pd-y-3">
              <i class="fa-solid fa-trash-arrow-up"></i>
            </button>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
export default NotesPanel;
