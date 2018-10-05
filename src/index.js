import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { mainReducer } from './reducers';
import App from './App';

const store = createStore(mainReducer);
const render = () => {
  ReactDOM.render(
    <App storeToTest={store}/>,
    document.getElementById('root')
  )
};
store.subscribe(render);
render();
