import { useNote } from "../../Context/Note/note-context";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { SET_TEXT } from "../../Variable/variable";
function Typographycal() {
  const { noteDispatch, noteState } = useNote();

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],

      ["clean"],
    ],
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
  ];
  return (
    <>
      <ReactQuill
        theme="snow"
        onChange={(value) => {
          noteDispatch({ type: SET_TEXT, payload: `${value}` });
        }}
        modules={modules}
        formats={formats}
        placeholder="write note"
      />
    </>
  );
}
export default Typographycal;
