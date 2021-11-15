import { ADD_SHAPE } from "./types";

export function addShape(payload) {
  return {
    type: ADD_SHAPE,
    payload,
  };
}