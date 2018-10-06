import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { mainReducer } from './reducers';
import App from './App';

export const store = createStore(mainReducer);
const render = () => {
  ReactDOM.render(
    <App values={store.getState().text} store={store} />,
    document.getElementById('root')
  )
};
store.subscribe(render);
render();
