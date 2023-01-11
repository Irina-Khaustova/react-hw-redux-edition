import { useSelector, useDispatch } from "react-redux";
import addService from "../actions/actionCreators";
import {
  changeServiceField,
  saveEditField,
  editServiceField,
  changeEditStatus,
} from "../actions/actionCreators";

export default function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const { isEditingItem } = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let name = item.service;
    let price = item.price;
    if (!isEditingItem) {
      dispatch(addService(name, price));
    } else {
      dispatch(saveEditField(name, price));
    }
    name = "";
    let value = "";
    dispatch(editServiceField(name, value));
  };

  const handleCancel = () => {
    let name = "";
    let value = "";
    dispatch(editServiceField(name, value));
    dispatch(changeEditStatus(false));
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
      {isEditingItem ? (
        <button className="button-cancel" onClick={handleCancel}>
          Cancel
        </button>
      ) : null}
    </>
  );
}
