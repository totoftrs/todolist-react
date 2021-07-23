/** @format */

import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }

    const newTodos = [todo, ...todos];
    console.log(...todos);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const update = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(update);
  };
  const removeTodo = (id) => {
    const remove = [...todos].filter((todo) => {
      console.log(id, 'id');
      console.log(todo.id, 'todo.id');

      return todo.id !== id;
    });

    setTodos(remove);
  };
  const updateTodo = (old, newValue) => {
    if (!newValue.text) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === old ? newValue : item)));
  };

  return (
    <div>
      <h1>Quel est le plan aujourd'hui ?</h1>
      <TodoForm add={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
