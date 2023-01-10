import { CHANGE_SERVICE_FIELD } from "../../actions/actionTypes";
import { EDIT_SERVICE_FIELD } from "../../actions/actionTypes";

const initialState = { service: "", price: "" };

export default function erviceAddReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      console.log(name, value);
      return { ...state, [name]: value === undefined ? "" : value };
    case EDIT_SERVICE_FIELD:
      const service = action.payload;
      console.log(service.name);
      return { ...state, service: service.name, price: service.value };
    default:
      return state;
  }
}
