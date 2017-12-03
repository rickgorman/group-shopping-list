import React from 'react';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add an item...."
        />
        <button onClick={this.handleSubmit}>
          Add
        </button>
      </form>
    );
  }
}

export default ItemForm;
