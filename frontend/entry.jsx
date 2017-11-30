import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// testing imports below -- remove when done

import * as BasketActions from './actions/basket_actions';

////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // add functions onto window for testing -- remove when done
  window.BasketActions = BasketActions;
  window.dispatch = store.dispatch;

  ///////////////////////

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
