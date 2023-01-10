import { FILTER_SERVICE_FIELD } from "../../actions/actionTypes";

const initialState = {
  filterItems: [],
  filterValue: "",
};

export default function filterFieldReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FILTER_SERVICE_FIELD:
      console.log(action.payload);
      const { items, value } = action.payload;
      console.log(value);
      const filterItems = items.filter((el) => el.name.includes(value));
      return { ...state, filterItems: filterItems, filterValue: value };
    default:
      return state;
  }
}
