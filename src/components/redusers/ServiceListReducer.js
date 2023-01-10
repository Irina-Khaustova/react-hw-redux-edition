import { nanoid } from 'nanoid';
import {
	ADD_SERVICE,
	REMOVE_SERVICE,
	SAVE_EDIT_FIELD,
	CHANGE_EDIT_STATUS,
	FILTER_SERVICE_FIELD,
} from '../../actions/actionTypes';

const initialItems = [
	{ id: nanoid(), name: 'Замена стекла', price: 21000 },
	{ id: nanoid(), name: 'Замена дисплея', price: 25000 },
];

const initialState = {
	items: initialItems,
	search: '',
	editingItem: null,
};

export default function serviceListReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_SERVICE: {
			const { name, price } = action.payload;
			let newState = state;
			console.log(newState);
			return {
				...state,
				items: [
					...state.items,
					{ id: nanoid(), name, price: Number(price) },
				],
			};
		}
		case REMOVE_SERVICE: {
			const { id } = action.payload;
			//console.log(state)
			return {
				...state,
				items: state.items.filter((service) => service.id !== id),
			};
		}
		case SAVE_EDIT_FIELD: {
			const { name, price } = action.payload;
			state.editingItem.name = name;
			state.editingItem.price = price;

			return { items: [...state.items], editingItem: null };
		}
		case CHANGE_EDIT_STATUS: {
			const { id } = action.payload;
			const editingItem = state.items.find((item) => item.id === id);

			return { ...state, editingItem: editingItem || null };
		}
		case FILTER_SERVICE_FIELD: {
			const { search } = action.payload;
			return { ...state, search: search.toLowerCase() };
		}
		default:
			return state;
	}
}
