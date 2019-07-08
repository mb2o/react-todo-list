import React from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className="row bg-warning">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
