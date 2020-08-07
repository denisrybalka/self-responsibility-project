import React from 'react';

import './todoList.scss';

import TodoItem from '../todo-item/todo-item.js';

const TodoList = ({todos,modalToggle,setCurrentTodoId}) => {
  const mappedList = todos.map(el => <TodoItem key={el.id} todo={el} modalToggle={modalToggle} setCurrentTodoId={setCurrentTodoId}/>)
  return <div className="TodoList">{mappedList}</div>
}

export default TodoList;