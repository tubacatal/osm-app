import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { mapReducer } from './map/reducer';

// combine different reducers to extend the store
const appReducer = combineReducers({
  map: mapReducer,
});

// add dev-tools in dev env
function makeStore(initialState) {
  if (process.env.NODE_ENV === 'development') {
    return createStore(
      appReducer,
      initialState,
      composeWithDevTools()
    );
  } else {
    return createStore(
      appReducer,
      initialState
    );
  }
}

export const store = makeStore();
