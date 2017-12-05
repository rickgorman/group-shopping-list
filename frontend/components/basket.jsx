import React from 'react';
import ItemList from './item_list.jsx';
import ItemFormContainer from './item_form_container.jsx';

import {
  Button, Grid, Header
} from 'semantic-ui-react';


class Basket extends React.Component {
  constructor(props) {
    super(props);

    this.clearBasket = this.clearBasket.bind(this);
  }

  clearBasket(e) {
    e.preventDefault();
    this.props.clearBasket()
      .then((response) => {
        this.props.fetchBasket();
      });
  }

  componentWillMount() {
    if(Object.keys(this.props.items).length === 0) {
      this.props.fetchBasket();
      this.props.fetchItems();
    }
  }

  render() {
    const { items, basket, itemOrdering } = this.props;
    const { basketItems } = basket;
    let mappedItems;
    if(basketItems && itemOrdering) {
      mappedItems = Object.keys(itemOrdering).sort().map((orderId) => {
        // check to see if we have this item in the store
        let id = itemOrdering[orderId];
        let item = items[id];
        if(!item || !items[id] || !basketItems[id]) {
          return {};
        } else {
          return {
            id: item.id,
            name: items[id].name,
            quantity: basketItems[id].quantity
          };
        }
      });
    }

    return(
      <Grid
        className='basket-grid'
        textAlign='center'
        style={{ margin: 25 }}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2'>
            Our Shopping Basket
          </Header>
          <ItemList items={mappedItems} />
          <ItemFormContainer basketId={this.basketId} />
          <Button
            className='clear-basket-button'
            negative
            onClick={this.clearBasket}>
            Clear Basket
          </Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Basket;
