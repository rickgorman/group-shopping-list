import { connect } from 'react-redux';

import Basket from './basket';

import {
  clearBasket,
  fetchBasket
 } from '../actions/basket_actions';

const mapBasketOrderedItemsToItems = (state) => {
  const { orderedItems } = state.basket;
  if(!orderedItems) {
    return false;
  } else {
    return orderedItems.map((item) => {
      return {
        item: state.items[item],
        quantity: item.quantity
      };
    });
  }
};

const mapStateToProps = (state, newProps) => {
  return {
    items: mapBasketOrderedItemsToItems(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearBasket: (id) => dispatch(clearBasket()),
    fetchBasket: (id) => dispatch(fetchBasket())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
