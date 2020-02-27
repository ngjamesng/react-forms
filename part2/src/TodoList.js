import React, { useState } from 'react';
import uuid from 'uuid/v4';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';


function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    let newTodo = { ...todo, id: uuid() };
    setTodos(oldTodos => [...oldTodos, newTodo]);
  }

  const editTodo = (id, newTask) => {
    setTodos(todos => {
      let newTodos = [...todos]
      for (let todo of newTodos){
        if (todo.id===id){
          todo.task = newTask
        }
      }
      return newTodos
    })
  }


  const removeTodo = id => {
    setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id))
  }

  const renderTodos = () => {
    return (
      // change
      todos.map(({task,id}) => (
        <Todo 
          task={task}
          id={id}
          key={id}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))
    )
  }

  return (
    <ol>
      <NewTodoForm addTodo={addTodo} />
      {renderTodos()}
    </ol>
  )
}

export default TodoList;