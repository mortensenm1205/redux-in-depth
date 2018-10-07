import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mainReducer } from './reducers';
import App from './App';

const persistedState = {
  text: [{
    id: 0, 
    text: "Hey! Go and get started with typing something in the field or click me to delete"
  }],
};

const store = createStore(mainReducer, persistedState);

render(
  <Provider store={store}>
   <App store={store}/>
  </Provider>,
  document.getElementById('root')
)

