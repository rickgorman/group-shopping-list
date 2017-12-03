import React from 'react';
import ItemList from './item_list.jsx';
import ItemForm from './item_form.jsx';

class Basket extends React.Component {
  constructor(props) {
    super(props);

    this.clearBasket = this.clearBasket.bind(this);
  }

  clearBasket(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div className="basket-wrapper">
        <h2>Our Basket</h2>
        <ItemList basketId={this.basketId} />
        <ItemForm basketId={this.basketId} />
        <button onClick={this.clearBasket}>
          Clear Basket
        </button>
      </div>
    );
  }
}

export default Basket;
