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

  const handleFiltered = (evt) => {
    evt.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="form-filter" name="service" onChange={handleChange} />
      <button className="form-button" type="submit" onClick={handleFiltered}>
        filtered
      </button>
    </form>
  );
}
