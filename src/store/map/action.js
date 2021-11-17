import { 
  ADD_SHAPE, 
  UPDATE_SHAPE,
  DELETE_SHAPE
} from "./types";

export function addShape(id, payload) {
  return {
    type: ADD_SHAPE,
    id,
    payload,
  };
}

export function updateShape(id, payload) {
  return {
    type: UPDATE_SHAPE,
    id,
    payload,
  };
}

export function deleteShape(id) {
  return {
    type: DELETE_SHAPE,
    id,
  };
}