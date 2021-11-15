import { ADD_SHAPE } from './types';
  
const initialState = {
  shapes: undefined,
};
  
export function mapReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SHAPE:
      return {
        ...state,
      };
  
    default:
      return state;
  }
}
  