import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
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
      composeWithDevTools(applyMiddleware(thunk))
    );
  } else {
    return createStore(
      appReducer,
      initialState,
      applyMiddleware(thunk)
    );
  }
}

export const store = makeStore();
