import { createStore, combineReducers } from 'redux';
import serviceAddReducer from '../../src/components/redusers/ServiceAddReducer';
import filterFieldReducer from '../components/redusers/FilterFieldReducer';
import serviceListReducer from '../components/redusers/ServiceListReducer';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  filterField: filterFieldReducer,
});
  
const store = createStore(reducer);
export default store;