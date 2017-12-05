import { connect } from 'react-redux';
import GroceryItem from './grocery_item';

import {
  createItem,
  destroyItemInBasket
} from '../actions/item_actions';

import { fetchBasket } from '../actions/basket_actions';

const mapStateToProps = (state, newProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createItem: (item) => {
      return dispatch(createItem(item));
    },

    destroyItemInBasket: (item) => {
      return dispatch(destroyItemInBasket(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryItem);
