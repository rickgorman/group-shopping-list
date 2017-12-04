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
    const { items, basket } = this.props;
    const { orderedItems } = basket;
    let mappedItems;

    if(orderedItems) {
      mappedItems = orderedItems.map((item) => {
        // check to see if we have this item in the store
        if(!items[item.id]) {
          return {};
        } else {
          return {
            id: item.id,
            name: items[item.id].name,
            quantity: item.quantity
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
