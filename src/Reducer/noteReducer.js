import {
  SET_TITLE,
  SET_TEXT,
  SET_LABEL,
  COLOR,
  CLEAR,
  PRIORITY,
} from "../Variable/variable";
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
        tags: [...state.tags, payload],
      };
    case COLOR:
      return {
        ...state,
        color: payload,
      };
    case PRIORITY:
      return {
        ...state,
        priority: payload,
      };
    case CLEAR:
      return {
        payload,
      };
    default:
      return state;
  }
}
export default noteReducer;
