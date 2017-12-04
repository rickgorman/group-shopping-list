import React from 'react';

import {
  Form, Button, Input
} from 'semantic-ui-react';


class ItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createItem({
      name: this.state.name,
      quantity: 1
    });

    this.setState({
      name: ''
    });

  }

  updateName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Input
          value={this.state.name}
          ref={(input) => { this.textInput = input; }}
          className='add-item-input'
          placeholder="Start typing..."
          onChange={this.updateName}
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
