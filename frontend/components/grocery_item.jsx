import React from 'react';

import {
  Button, Container, List, Icon, Grid,
} from 'semantic-ui-react';

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity() {
    const { item } = this.props;
    this.props.destroyItemInBasket(item);
  }

  incrementQuantity() {
    const { item } = this.props;
    this.props.createItem(item);
  }

  render() {
    const { id, name, quantity } = this.props.item;

    const isNegative = quantity === 1;
    const minusButtonIcon = quantity === 1 ? 'remove' : 'minus';

    return(
      <Grid columns={3} relaxed>
        <Grid.Column
          columns={1}
          className='grocery-item-grid-column'
          verticalAlign='middle'>
          <List horizontal floated='left'>
            <List.Item>
              <Button
                onClick={this.decrementQuantity}
                negative={isNegative}
                icon={minusButtonIcon} />
            </List.Item>
            <List.Item>
              <Button
                onClick={this.incrementQuantity}
                icon='plus' />
            </List.Item>
            <List.Item>
              <span className='grocery-item-quantity'>
                {quantity}
              </span>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column
          columns={2}
          className='grocery-item-grid-column'
          textAlign='left'
          verticalAlign='middle'>
          <span className='grocery-item-name'>
            {name}
          </span>
        </Grid.Column>
      </Grid>
    );
  }
}

export default GroceryItem;
