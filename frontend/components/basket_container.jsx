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
    clearBasket: (id) => dispatch(clearBasket()),
    fetchBasket: (id) => dispatch(fetchBasket()),
    fetchItems:  (id) => dispatch(fetchItems()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
