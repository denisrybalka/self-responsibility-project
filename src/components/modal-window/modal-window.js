import React from 'react';

import CreateNameForm from './create-name-form'
import SetDoneForm from './set-done-form'
import DeleteTodoForm from './delete-todo-form'
import SubmitTodoForm from './submit-todo-form'

import './modal-window.scss'

const Modal = ({createTodo,modalToggle,modalInfo,deleteTodo,submitTodo,setDone,currentTodoId}) => {
    return (
        <div>
          <div className="modal-window">

		  	<div className="modal-close" onClick={modalToggle}></div>

			{modalInfo === "create" ?
				<CreateNameForm
					createTodo={createTodo}
					modalToggle={modalToggle}
				/>
			: null}

			{modalInfo === "delete" ?
				<DeleteTodoForm
					deleteTodo={deleteTodo}
					modalToggle={modalToggle}
					currentTodoId={currentTodoId}
				/>
			: null}

			{modalInfo === "submit" ?
				<SubmitTodoForm
					submitTodo={submitTodo}
					modalToggle={modalToggle}
					currentTodoId={currentTodoId}
				/>
			: null}

			{modalInfo === "setDone" ?
				<SetDoneForm
					setDone={setDone}
					modalToggle={modalToggle}
					currentTodoId={currentTodoId}
				/>
			: null}

          </div>

		  <div className="modal-overlay" onClick={modalToggle}></div>
        </div>
    );
}

export default Modal;
