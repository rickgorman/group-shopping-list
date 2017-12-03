import React from 'react';
import Item from './item.jsx';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul>
        <Item />
        <Item />
      </ul>
    );
  }
}

export default ItemList;
