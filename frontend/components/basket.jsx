import React from 'react';
import ItemList from './item_list.jsx';
import ItemForm from './item_form.jsx';

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
    this.props.clearBasket();
  }

  componentWillMount() {
    if(!this.props.items) {
      this.props.fetchBasket();
    }
  }

  render() {
    const { items } = this.props;

    return(
      <Grid
        textAlign='center'
        style={{ margin: 25 }}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2'>
            Our Shopping Basket
          </Header>
          <ItemList items={items} />
          <ItemForm basketId={this.basketId} />
          <Button onClick={this.clearBasket}>
            Clear Basket
          </Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Basket;
