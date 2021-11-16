import { ADD_SHAPE, DELETE_SHAPE } from "./types";

export function addShape(payload) {
  return {
    type: ADD_SHAPE,
    payload,
  };
}

export function deleteShape(index) {
  return {
    type: DELETE_SHAPE,
    index,
  };
}