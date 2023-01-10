import { useSelector, useDispatch } from "react-redux";
import { removeService } from "../actions/actionCreators";
import { CHANGE_EDIT_STATUS, SAVE_EDIT_FIELD } from "../actions/actionTypes";
import { EDIT_SERVICE_FIELD } from "../actions/actionTypes";

export default function ServiceList() {
  const { items, isEdit } = useSelector((state) => state.serviceList);
  console.log(items);
  //const item = useSelector(state => state.serviceAdd);
  const { filterItems, filterValue } = useSelector(
    (state) => state.filterField
  );

  console.log(items);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeService(id));
  };
  const itemsView = filterValue ? filterItems : items;
  console.log(filterValue);

  const handleEdit = (id) => {
    const editItem = items.filter((el) => el.id === id);
    console.log(editItem[0]);
    let name = editItem[0].name;
    let value = editItem[0].price;
    console.log(editItem[0].name, editItem[0].price);
    dispatch({ type: EDIT_SERVICE_FIELD, payload: { name, value } });
    dispatch({ type: CHANGE_EDIT_STATUS });
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
