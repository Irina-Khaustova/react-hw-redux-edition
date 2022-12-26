import { createStore, combineReducers } from 'redux';
import serviceAddReducer from '../../src/components/redusers/ServiceAddReducer';
import serviceListReducer from '../components/redusers/ServistListReducer';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
});
  
const store = createStore(reducer);
export default store;