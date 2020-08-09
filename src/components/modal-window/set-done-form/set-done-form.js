import React from 'react';

const SetDoneForm = ({setDone,modalToggle,currentTodoId}) => {
  return (
    <>
      <div className="modal-title">Подтвердить выполнение?</div>
      <div className="modal-paragraf">Вы уверены что успешно выполнили <br/> поставленную цель и готовы переместить её на полку истории?</div>
      <form className="modal-form" onSubmit={() => setDone(currentTodoId)}>
        <button className="main-btn" type="submit">Да, подтвердить</button>
        <button className="secondary-btn"
            onClick={modalToggle}>Отмена</button>
      </form>
    </>
  )
}

export default SetDoneForm;