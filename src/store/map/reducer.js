import { ADD_SHAPE } from './types';
  
const initialState = {
  shapes: [],
};
  
export function mapReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SHAPE:
      return {
        ...state,
        shapes: [
          ...state.shapes,
          { ...action.payload },
         ],
      };
  
    default:
      return state;
  }
}
  