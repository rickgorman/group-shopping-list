import React from 'react';

import {
  Button, Container, List, Icon, Grid,
} from 'semantic-ui-react';

class GroceryItem extends React.Component {
  render() {

    const { name, quantity } = this.props;

    const isNegative = !quantity;
    const minusButtonIcon = !quantity ? 'remove' : 'minus';

    return(
      <Grid columns={3} relaxed>
        <Grid.Column
          columns={1}
          className='grocery-item-grid-column'
          verticalAlign='middle'>
          <List horizontal floated='left'>
            <List.Item>
              <Button negative={isNegative} icon={minusButtonIcon} />
            </List.Item>
            <List.Item>
              <Button icon='plus' />
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
