import React from 'react';
import GroceryItem from './grocery_item.jsx';

import {
  Button, Container, Grid, Header, Icon, Image, Item,
  Label, Menu, Segment, Step, Table,
} from 'semantic-ui-react';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let groceryItems;
    if(this.props.items) {
      groceryItems = this.props.items.map((item) => {
        const { id, name, quantity } = item;
        return(
          <Segment key={id}>
            <GroceryItem
              key={id}
              name={name}
              quantity={quantity} />
          </Segment>
        );
      });
    }

    return(
      <Segment.Group>
        {groceryItems}
      </Segment.Group>
    );
  }
}

export default ItemList;
