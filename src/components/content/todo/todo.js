import React from 'react';

import './todo.scss'

import FillPanel from '../fill-panel/fillPanel.js'
import CustomPanel from '../custom-panel/customPanel.js'

const Todo = ({todos, getDescription,currentTodoId, onGoalAdded, setColor,checkGoal,modalToggle,deleteGoal}) => {

  const idx = todos.findIndex(todo => todo.id === currentTodoId);
  const currentTodo = todos[idx];

  let btnStyle = "todo-btn main-btn submit-btn";

  if (currentTodo.done) {
    btnStyle = "todo-btn main-btn";
  }

  return (
    <div className="Todo">
      <div className="todo-title" style={{ color: `${currentTodo.color}` }}>{currentTodo.name}</div>
      <div className="panels-wrap">

        <FillPanel
          getDescription={getDescription}
          desc={currentTodo.desc}
          idx={idx}
          goalsList={currentTodo.goals}
          onGoalAdded={onGoalAdded}
          parentIdx={idx}
          isReady={currentTodo.ready}
          checkGoal={checkGoal}
          deleteGoal={deleteGoal}
        />

        <CustomPanel
          getDescription={getDescription}
          tags={currentTodo.tags}
          idx={idx}
          setColor={setColor}
          isReady={currentTodo.ready}
          todoColor={currentTodo.color}
          date={currentTodo.date}
        />

      </div>
      {currentTodo.ready ?
      <button className={btnStyle} onClick={() => currentTodo.done ? null : modalToggle("setDone")}>{currentTodo.done ? "Выполнено" : "Подтвердить выполнение"}</button> :
      <button className="todo-btn main-btn" onClick={() => modalToggle("submit")}>Добавить задачу</button>
      }
    </div>
    )
}

export default Todo;