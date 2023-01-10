import { createStore, combineReducers } from 'redux';
import serviceListReducer from '../components/redusers/ServiceListReducer';

const reducer = combineReducers({
	serviceList: serviceListReducer,
});

const store = createStore(reducer);
export default store;
