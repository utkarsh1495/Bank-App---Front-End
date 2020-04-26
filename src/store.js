import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { persistStore, autoRehydrate } from 'redux-persist';
import { asyncSessionStorage } from 'redux-persist/storages';

export default function configureStore(initialState={}) {
  const store = compose(
    autoRehydrate())(createStore)(rootReducer, initialState, applyMiddleware(thunk)
  );

  persistStore(store, {
    storage: asyncSessionStorage
  });

  return store
}