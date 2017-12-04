import { connect } from 'react-redux';
import GroceryItem from './grocery_item';

import { createItem } from '../actions/item_actions';

import { fetchBasket } from '../actions/basket_actions';

const mapStateToProps = (state, newProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createItem: (item) => {
      return dispatch(createItem(item))
        .then((response) => {
          return dispatch(fetchBasket());
        });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryItem);
