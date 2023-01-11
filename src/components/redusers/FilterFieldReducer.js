import { FILTER_SERVICE_FIELD } from "../../actions/actionTypes";

const initialState = {
  filterItems: [],
  filterValue: "",
};

export default function filterFieldReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_SERVICE_FIELD:
      const { items, value } = action.payload;
      const filterItems = items.items.filter((el) => el.name.includes(value));
      return { ...state, filterItems: filterItems, filterValue: value };
    default:
      return state;
  }
}
