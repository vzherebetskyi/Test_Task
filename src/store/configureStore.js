import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import cellReducer from '../reducers/cellReducer';

//Store creation

export default () => {
    const store = createStore(
        cellReducer, applyMiddleware(thunk)
    );
    return store;
};