import React from 'react';

const CreateNameForm = ({nameSubmit,name,changeName,modalToggle}) => {
    return (
      <>
      <div className="modal-title">Создать новую задачу?</div>
      <form className="modal-form" onSubmit={(e) => nameSubmit(e)}> 
          <input
              className="sample-input"
              placeholder="Придумайте название"
              value={name}
              onChange={changeName}
              required
              maxLength="25"
              autoFocus={true}
          />
          <button className="main-btn" type="submit">Создать задачу</button>
          <button className="secondary-btn"
                  onClick={modalToggle}>Отмена</button>
      </form>
      </>
    )
}

export default CreateNameForm;