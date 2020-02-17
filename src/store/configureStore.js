import { createStore } from 'redux';

import cellReducer from '../reducers/cellReducer';

// Store creation

export default () => {
  const store = createStore(
    cellReducer,
  );
  return store;
};
