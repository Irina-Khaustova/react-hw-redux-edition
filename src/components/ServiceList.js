import { useSelector, useDispatch } from "react-redux";
import { removeService } from "../actions/actionCreators";
import { CHANGE_EDIT_STATUS } from "../actions/actionTypes";
import { EDIT_SERVICE_FIELD } from "../actions/actionTypes";

export default function ServiceList() {
  const { items } = useSelector((state) => state.serviceList);
  const { filterItems, filterValue } = useSelector(
    (state) => state.filterField
  );

  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeService(id));
  };
  const itemsView = filterValue ? filterItems : items;

  const handleEdit = (id) => {
    const editItemMass = items.filter((el) => el.id === id);
    let editItem = editItemMass[0];
    const name = editItem.name;
    const value = editItem.price;
    dispatch({ type: EDIT_SERVICE_FIELD, payload: { name, value } });
    dispatch({ type: CHANGE_EDIT_STATUS, payload: { editItem } });
  };

  return (
    <ul>
      {itemsView.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id)}>Edit</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}
