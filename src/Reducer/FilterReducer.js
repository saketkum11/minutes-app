import { FILTER, SORT } from "../Variable/variable";

function filterReducer(state, { type, payload }) {
  switch (type) {
    case SORT:
      return;

    default:
      break;
  }
}
export default filterReducer;
