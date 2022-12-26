import { CHANGE_SERVICE_FIELD } from "../../actions/actionTypes";

const initialState = { name: "2", value: "3"};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      
      return { ...state, [name]: value };
    default:
      return state;
  }
}
