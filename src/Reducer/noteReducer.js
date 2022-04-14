import { SET_TITLE, SET_TEXT, SET_LABEL, COLOR } from "../Variable/variable";
function noteReducer(state, { type, payload }) {
  switch (type) {
    case SET_TITLE:
      return {
        ...state,
        noteTitle: payload,
      };
    case SET_TEXT:
      return {
        ...state,
        noteText: payload,
      };
    case SET_LABEL:
      return {
        ...state,
        label: [...state.label, payload],
      };
    case COLOR:
      return {
        ...state,
        color: payload,
      };

    default:
      return { ...state };
  }
}
export default noteReducer;
