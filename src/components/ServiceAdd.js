import { useSelector, useDispatch } from "react-redux";
import changeServiceField from "../actions/actionCreators"
import  addService  from "../actions/actionCreators";
import  CHANGE_SERVICE_FIELD  from "../actions/actionCreators";
import  ADD_SERVICE  from "../actions/actionCreators";
import store from "../store";

export default function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  console.log(item)
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value)
    dispatch({ type: CHANGE_SERVICE_FIELD, payload: { name, value }});
    console.log(store.getState())
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //const { name, value } = evt.target;
    dispatch(addService(item.name, item.price));
  };
  return (
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
  );
}
