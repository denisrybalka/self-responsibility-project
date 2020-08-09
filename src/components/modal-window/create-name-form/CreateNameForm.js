import React, {useState} from 'react';

const CreateNameForm = ({createTodo, modalToggle}) => {

  const [name,setName] = useState('');

    return (
      <>
      <div className="modal-title">Создать новую задачу?</div>
      <form className="modal-form" onSubmit={(e) => createTodo(e,name)}> 
          <input
              className="sample-input"
              placeholder="Придумайте название"
              value={name}
              onChange={e => setName(e.target.value)}
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