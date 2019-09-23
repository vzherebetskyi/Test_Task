import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Table from './components/HookTable';

const store = configureStore();
// store.dispatch(addCell({ lineNumber: 7, columnNumber: 7 }));
// store.subscribe(() => {
//     console.log( store.getState() );
// });

const app = (
    <Provider store = { store }>
         <Table />
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));