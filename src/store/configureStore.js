import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import cellReducer from '../reducers/cellReducer';

//Store creation

export default () => {
    const store = createStore(
        combineReducers({
            cells: cellReducer
        }), applyMiddleware(thunk)
    );
    return store;
};