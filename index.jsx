import React from 'react';

import ReactDOM from 'react-dom';
import App from './Components/App.jsx';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import thunk from 'redux-thunk';
import reducers from './Reducers/index.js';
import {Provider} from 'react-redux';

var store =createStore(reducers,applyMiddleware(thunk));
console.log(store.getState());
ReactDOM.render(<Provider store={store}><App data={[]}></App></Provider>,document.getElementById('root'))



