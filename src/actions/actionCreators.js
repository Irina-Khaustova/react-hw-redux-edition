import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  FILTER_SERVICE_FIELD,
  SAVE_EDIT_FIELD, 
  EDIT_SERVICE_FIELD, 
  CHANGE_EDIT_STATUS
} from "./actionTypes";

export default function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } };
}
export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}
export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}
export function filterServiceField(items, value) {
  return { type: FILTER_SERVICE_FIELD, payload: { items, value } };
}
export function saveEditField(name, price) {
  return { type: SAVE_EDIT_FIELD, payload: { name, price} };
}
export function editServiceField(name, value) {
  return { type: EDIT_SERVICE_FIELD, payload: { name, value} };
}
export function changeEditStatus(value) {
  return { type: CHANGE_EDIT_STATUS, payload: { value }};
}
