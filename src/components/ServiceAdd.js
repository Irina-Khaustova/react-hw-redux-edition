import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	ADD_SERVICE,
	CHANGE_EDIT_STATUS,
	SAVE_EDIT_FIELD,
} from '../actions/actionTypes';

export default function ServiceAdd() {
	const [price, setPrice] = useState('');
	const [name, setName] = useState('');
	const { editingItem } = useSelector((state) => state.serviceList);
	const dispatch = useDispatch();

	useEffect(() => {
		if (editingItem) {
			setName(editingItem.name);
			setPrice(editingItem.price);
		} else {
			setName('');
			setPrice('');
		}
	}, [editingItem]);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		if (!editingItem) {
			dispatch({ type: ADD_SERVICE, payload: { name, price } });
		} else {
			dispatch({
				type: SAVE_EDIT_FIELD,
				payload: { name, price },
			});
		}

		setName('');
		setPrice('');
	};

	const handleCancel = () => {
		dispatch({
			type: CHANGE_EDIT_STATUS,
			payload: { status: false },
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					className='form-service'
					name='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					className='form-price'
					name='price'
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>
				<button className='form-button' type='submit'>
					Save
				</button>
			</form>
			{editingItem ? (
				<button className='button-cancel' onClick={handleCancel}>
					Cancel
				</button>
			) : null}
		</>
	);
}
