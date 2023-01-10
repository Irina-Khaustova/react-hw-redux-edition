import { useDispatch } from 'react-redux';
import { FILTER_SERVICE_FIELD } from '../actions/actionTypes';

export default function FilterField() {
	const dispatch = useDispatch();

	const handleChange = (evt) => {
		const { value } = evt.target;
		dispatch({ type: FILTER_SERVICE_FIELD, payload: { search: value } });
	};

	return (
		<form>
			<input
				className='form-filter'
				name='service'
				onChange={handleChange}
			/>
			{/* <button className='form-button' type='submit'>
				filtered
			</button> */}
		</form>
	);
}
