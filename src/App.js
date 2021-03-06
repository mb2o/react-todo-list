import React, { Component } from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      items: [
        ...this.state.items,
        { id: this.state.id, title: this.state.item }
      ],
      item: '',
      id: uuid(),
      editItem: false
    });
  };

  handleClear = () => {
    this.setState({ items: [] });
  };

  handleEdit = id => {
    const selectedItem = this.state.items.find(item => item.id === id);
    const unselectedItems = this.state.items.filter(item => item.id !== id);

    this.setState({
      id,
      item: selectedItem.title,
      items: unselectedItems,
      editItem: true
    });
  };

  handleDelete = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />

            <TodoList
              items={this.state.items}
              handleClear={this.handleClear}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
