import { nanoid } from "nanoid";
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  SAVE_EDIT_FIELD,
  CHANGE_EDIT_STATUS,
} from "../../actions/actionTypes";

const initialState = {
  items: [
    { id: nanoid(), name: "Замена стекла", price: 21000 },
    { id: nanoid(), name: "Замена дисплея", price: 25000 },
  ],
  isEdit: false,
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      let newState = state;
      console.log(newState);
      return {
        ...state,
        items: [...state.items, { id: nanoid(), name, price: Number(price) }],
      };
    case REMOVE_SERVICE:
      const { id } = action.payload;
      //console.log(state)
      return {
        ...state,
        items: state.items.filter((service) => service.id !== id),
      };
    case SAVE_EDIT_FIELD:
      //console.log(action.payload)
      const { editId, editName, editPrice } = action.payload;
      const editItems = state.items.map((el) => {
        if (el.id === editId) {
          el.name = editName;
          el.price = editPrice;
        }
        return el;
      });
      return { ...state, items: editItems, isEdit: false };
    case CHANGE_EDIT_STATUS:
      console.log(state);
      return { ...state, isEdit: true };
    default:
      return state;
  }
}
