import { useDispatch, useSelector } from 'react-redux';
import { removeService } from '../actions/actionCreators';
import { CHANGE_EDIT_STATUS, EDIT_SERVICE_FIELD } from '../actions/actionTypes';

export default function ServiceList() {
	const { items, search } = useSelector((state) => state.serviceList);
	console.log(items);
	//const item = useSelector(state => state.serviceAdd);

	const dispatch = useDispatch();
	const handleRemove = (id) => {
		dispatch(removeService(id));
	};

	const filteredItems = items.filter((item) =>
		item.name.toLowerCase().includes(search)
	);

	const handleEdit = (id) => {
		const editItem = items.filter((el) => el.id === id);
		console.log(editItem[0]);
		let name = editItem[0].name;
		let value = editItem[0].price;
		console.log(editItem[0].name, editItem[0].price);
		dispatch({ type: EDIT_SERVICE_FIELD, payload: { name, value } });
		dispatch({ type: CHANGE_EDIT_STATUS, payload: { id } });
	};

	return (
		<ul>
			{filteredItems.map((o) => (
				<li key={o.id}>
					{o.name} {o.price}
					<button onClick={() => handleEdit(o.id)}>Edit</button>
					<button onClick={() => handleRemove(o.id)}>✕</button>
				</li>
			))}
		</ul>
	);
}
