import { FILTER_SERVICE_FIELD } from "../../actions/actionTypes";

const initialState = {
  filterItems: [],
  filterValue: "",
};

export default function filterFieldReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_SERVICE_FIELD:
      const { items, value } = action.payload;
      const newValue = value.toLowerCase();
      const filterItems = items.items.filter((el) => el.name.toLowerCase().includes(newValue));
      return { ...state, filterItems: filterItems, filterValue: value };
    default:
      return state;
  }
}
