import React from 'react';

import './todo.scss'

import FillPanel from '../fill-panel/fillPanel.js'
import CustomPanel from '../custom-panel/customPanel.js'

const Todo = ({todos,getDescription,currentTodoId,onGoalAdded,setColor,checkGoal,modalToggle,deleteGoal}) => {

  const idx = todos.findIndex(todo => todo.id === currentTodoId);
  const currentTodo = todos[idx];

  let btnStyle = "todo-btn main-btn submit-btn";

  if (currentTodo.isDone) {
    btnStyle = "todo-btn main-btn";
  }

  return (
    <div className="Todo">
      <div className="todo-title" style={{ color: `${currentTodo.color}` }}>{currentTodo.name}</div>
      <div className="panels-wrap">

        <FillPanel
          getDescription={getDescription}
          idx={idx}
          onGoalAdded={onGoalAdded}
          parentIdx={idx}
          checkGoal={checkGoal}
          deleteGoal={deleteGoal}
          currentTodo={currentTodo}
        />

        <CustomPanel
          getDescription={getDescription}
          idx={idx}
          setColor={setColor}
          currentTodo={currentTodo}
        />

      </div>

      {currentTodo.isReady ?
        <button
          className={btnStyle}
          onClick={() => currentTodo.isDone ? null : modalToggle("setDone")}>
          {currentTodo.isDone ? "Выполнено" : "Подтвердить выполнение"}
        </button> :
        
        <button
          className="todo-btn main-btn"
          onClick={() => modalToggle("submit")}>
          Добавить задачу
        </button>
      }
    </div>
  )
}

export default Todo;