import { useSelector, useDispatch } from "react-redux";
import { CHANGE_SERVICE_FIELD } from "../actions/actionTypes";
import { ADD_SERVICE, SAVE_EDIT_FIELD } from "../actions/actionTypes";
import store from "../store";

export default function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const { isEdit } = useSelector((state) => state.serviceList);
  console.log(isEdit);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value);
    dispatch({ type: CHANGE_SERVICE_FIELD, payload: { name, value } });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let name = item.service;
    let price = item.price;
    let id = item.id;
    console.log(price);
    if (!isEdit) {
      dispatch({ type: ADD_SERVICE, payload: { name, price } });
    } else {
      dispatch({ type: SAVE_EDIT_FIELD, payload: { id, name, price } });
    }
    name = "";
    let value = "";
    dispatch({ type: CHANGE_SERVICE_FIELD, payload: { name, value } });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-service"
          name="service"
          onChange={handleChange}
          value={item.service}
        />
        <input
          className="form-price"
          name="price"
          onChange={handleChange}
          value={item.price}
        />
        <button className="form-button" type="submit">
          Save
        </button>
      </form>
      {isEdit ? <button className="button-cancel">Cancel</button> : null}
    </>
  );
}
