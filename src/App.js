import React, { Component } from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    items: [
      { id: 1, title: 'Vakantiespullen inpakken' },
      { id: 2, title: 'Boodschappen doen' },
      { id: 3, title: 'Hond uitlaten' }
    ],
    id: uuid(),
    item: '',
    editItem: false
  };

  handleChange = e => {
    console.log('Handle change');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Submitting Item');
  };

  handleClear = () => {
    console.log('List cleared');
  };

  handleEdit = id => {
    console.log(id);
  };

  handleDelete = id => {
    console.log(id);
  };

  render() {
    console.log(this.state);

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
