import { HIGH, LOW, MEDIUM, SORT, CLEAR } from "../Variable/variable";

function filterReducer(state, { type, payload }) {
  switch (type) {
    case HIGH:
      return {
        ...state,
        high: !state.high,
      };
    case LOW:
      return {
        ...state,
        low: !state.low,
      };
    case MEDIUM:
      return {
        ...state,
        medium: !state.medium,
      };
    case SORT:
      return {
        ...state,
        sortBy: payload,
      };
    case CLEAR:
      return;
    default:
      return state;
  }
}
export default filterReducer;
