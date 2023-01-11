import { CHANGE_SERVICE_FIELD } from "../../actions/actionTypes";
import { EDIT_SERVICE_FIELD } from "../../actions/actionTypes";

const initialState = { service: "", price: "", id: "" };

export default function erviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const { name, value } = action.payload;
      return { ...state, [name]: value === undefined ? "" : value };
    }
    case EDIT_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, service: name, price: value };
    default:
      return state;
  }
}
