import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// testing imports below -- remove when done

import * as BasketActions from './actions/basket_actions';
import * as BasketApi from './util/basket_api_util';
import * as ItemActions from './actions/item_actions';
import * as ItemApi from './util/item_api_util';

////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // add functions onto window for testing -- remove when done
  window.BasketActions = BasketActions;
  window.BasketApi = BasketApi;
  window.dispatch = store.dispatch;
  window.ItemApi = ItemApi;
  window.ItemActions = ItemActions;

  ///////////////////////

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
