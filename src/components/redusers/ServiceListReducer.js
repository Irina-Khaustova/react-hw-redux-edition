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
  isEditingItem: null,
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      const { name, price } = action.payload;
      return {
        ...state,
        items: [...state.items, { id: nanoid(), name, price: Number(price) }],
      };
    }
    case REMOVE_SERVICE: {
      const { id } = action.payload;
      return {
        ...state,
        items: state.items.filter((service) => service.id !== id),
      };
    }
    case SAVE_EDIT_FIELD: {
      const { name, price } = action.payload;
      const editItem = state.isEditingItem.editItem;
      let editingItem = state.items.filter((el) => el.id === editItem.id);
      editingItem[0].name = name;
      editingItem[0].price = price;
      return { ...state, items: [...state.items], isEditingItem: null };
    }
    case CHANGE_EDIT_STATUS: {
      const editItem = action.payload;
      const isEditItem = editItem ? editItem : null;
      return { ...state, isEditingItem: isEditItem };
    }
    default:
      return state;
  }
}
