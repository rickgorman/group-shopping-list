import { connect } from 'react-redux';
import ItemForm from './item_form';

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
    },
    fetchBasket: (id) => {
      return dispatch(fetchBasket(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemForm);
