import { useSelector, useDispatch } from "react-redux";
import { FILTER_SERVICE_FIELD } from "../actions/actionTypes";

export default function FilterField() {
  const filterItems = useSelector((state) => state.filterField);
  const items = useSelector((state) => state.serviceList);
  console.log(filterItems);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch();
  };
  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch({ type: FILTER_SERVICE_FIELD, payload: { items, value } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="form-filter" name="service" onChange={handleChange} />
      <button className="form-button" type="submit">
        filtered
      </button>
    </form>
  );
}
