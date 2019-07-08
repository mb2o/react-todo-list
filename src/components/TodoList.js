import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { items, handleClear, handleEdit, handleDelete } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>
        {items.map(item => (
          <TodoItem
            key={item.id}
            title={item.title}
            handleEdit={() => handleEdit(item.id)}
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
        <button
          disabled={items.length === 0}
          className="btn btn-block btn-danger mt-5 text-uppercase"
          onClick={handleClear}>
          Clear List
        </button>
      </ul>
    );
  }
}
