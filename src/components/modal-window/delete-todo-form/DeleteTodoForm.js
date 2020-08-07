import React from 'react';

const DeleteTodoForm = ({deleteTodo,modalToggle,currentTodoId}) => {
  
    return (
      <>
        <div className="modal-title">Удалить задачу?</div>
        <div className="modal-paragraf">Задача будет навсегда удалена</div>
        <form className="modal-form" onSubmit={(e) => deleteTodo(e,currentTodoId)}>
            <button className="main-btn delete-btn" type="submit">Да, удалить задачу</button>
            <button className="secondary-btn"
                    onClick={modalToggle}>Отмена</button>
        </form>
    </>
  )
}

export default DeleteTodoForm;