import React from 'react';

import {
  Form, Button, Input
} from 'semantic-ui-react';


class ItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Input
          ref={(input) => { this.textInput = input; }}
          className='add-item-input'
          placeholder="Start typing..."
        />
        <Button
          positive
          onClick={this.handleSubmit}>
          Add
        </Button>
      </Form>
    );
  }
}

export default ItemForm;
