import { connect } from 'react-redux';

import Basket from './basket';

import {
  clearBasket,
  fetchBasket
} from '../actions/basket_actions';

import { fetchItems } from '../actions/item_actions';

const mapStateToProps = (state, newProps) => {
  return {
    basket: state.basket,
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearBasket: (id) => {
      return dispatch(clearBasket());
    },
    fetchBasket: (id) => {
      return dispatch(fetchBasket());
    },
    fetchItems:  (id) =>  {
      return dispatch(fetchItems());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
