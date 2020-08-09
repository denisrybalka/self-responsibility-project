import React from 'react';

const SubmitTodoForm = ({submitTodo,modalToggle,currentTodoId}) => {
  return (
    <>
      <div className="modal-title">Добавить новую задачу?</div>
      <div className="modal-paragraf">Вы уверены что заполнили все поля и хотите <br/> добавить новую задачу?</div>
      <form className="modal-form" onSubmit={() => submitTodo(currentTodoId)}>
        <button className="main-btn" type="submit">Да, добавить задачу</button>
        <button className="secondary-btn"
            onClick={modalToggle}>Отмена</button>
      </form>
    </>
  )
}


export default SubmitTodoForm;