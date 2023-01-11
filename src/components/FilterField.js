import { useSelector, useDispatch } from "react-redux";
import { filterServiceField } from "../actions/actionCreators";

export default function FilterField() {
  const items = useSelector((state) => state.serviceList);

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch();
  };
  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch(filterServiceField(items, value));
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
