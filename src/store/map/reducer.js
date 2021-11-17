import { 
  ADD_SHAPE, 
  UPDATE_SHAPE,
  DELETE_SHAPE
} from './types';
  
const initialState = {
  shapes: {},
};
  
export function mapReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SHAPE:
      return {
        ...state,
        shapes: {
          ...state?.shapes,
          [action?.id]: { ...action?.payload },
        },
      };

    case UPDATE_SHAPE:
      return {
        ...state,
        shapes: {
          ...state?.shapes,
          [action?.id]: { ...action?.payload },
        },
      };

    case DELETE_SHAPE:
      const existingShapes = { ...state?.shapes } || {};
      delete existingShapes[action?.id];

      return {
        ...state,
        shapes: { ...existingShapes },
      };
  
    default:
      return state;
  }
}
  