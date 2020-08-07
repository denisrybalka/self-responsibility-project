import React, { Component} from 'react';

import CreateNameForm from './create-name-form'
import SetDoneForm from './set-done-form'
import DeleteTodoForm from './delete-todo-form'
import SubmitTodoForm from './submit-todo-form'

import './modal-window.scss'

class Modal extends Component {

	state = {
		name: '',
	}

	changeName = (e) => {
		this.setState({
			name: e.target.value
		})
	}

	nameSubmit = (e) => {
		e.preventDefault();
		
		const {name} = this.state;
		const {createTodo} = this.props;

		createTodo(e, name);
		this.setState({
			name: '',
		});
	}

    render() {
    	const {changeName, nameSubmit} = this;
    	const {name} = this.state;
    	const {modalToggle,modalInfo,deleteTodo,submitTodo,setDone,currentTodoId} = this.props;

        return (
            <>
              <div className="modal-window">
				  	<div className="modal-close" onClick={modalToggle}></div>

					{modalInfo === "create" ?
						<CreateNameForm
							nameSubmit={nameSubmit}
							name={name}
							changeName={changeName}
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
            </>
        );
    }
}

export default Modal;
