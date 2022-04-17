import { FILTER, SORT } from "../Variable/variable";

function filterReducer(state, { type, payload }) {
  switch (type) {
    case SORT:
      return {
        ...state,
        sortBy: [state.sortBy, payload],
      };
    case FILTER:
      return {
        ...state,
        priority: [...state.priority, payload],
      };

    default:
      return state;
  }
}
export default filterReducer;
