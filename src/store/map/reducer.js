import { ADD_SHAPE, DELETE_SHAPE } from './types';
  
const initialState = {
  shapes: [],
};
  
export function mapReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SHAPE:
      return {
        ...state,
        shapes: [
          ...state?.shapes,
          { ...action?.payload },
         ],
      };

    case DELETE_SHAPE:
      const existingShapes = state?.shapes || [];
      delete existingShapes[action?.index];

      return {
        ...state,
        shapes: [ ...state?.shapes ],
      };
  
    default:
      return state;
  }
}
  