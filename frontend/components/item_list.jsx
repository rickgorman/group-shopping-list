import React from 'react';
import GroceryItemContainer from './grocery_item_container.jsx';

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
        const { id } = item;
        return(
          <Segment key={id}>
            <GroceryItemContainer
              item={item}/>
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
