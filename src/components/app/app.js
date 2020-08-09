import React, { Component } from 'react'

import './app.scss'

import Sidebar from '../sidebar'
import Content from '../content'
import Modal from '../modal-window'

class App extends Component {
	
	state = {
		todos:[], /*[
				{name:"Собрать будку", id: 100, desc:'Первым делом нужно найти пример будки, чтоб потом собрать такую же, и узнать какие строй. материалы нужно купить. После чего заказать строй.материалы в магазине. Потом в один из прекрасных нежарких дней нужно собарть всю волю и силу в кулак, и наконец-то собрать эту будку.', goals: [{id:100, text: "Выбрать будку в интернете", done:true}, {id:101, text: "Заказать строй.материалы",done:true}, {id:102, text: "Собрать всю волю в кулак",done:false},{id:104, text: "Сделать будку",done:false}],
						tags:'Просьба бабушки, будка, своими руками', color:'rgb(238, 82, 83)', isDone: false, isReady: true, date: new Date().toLocaleString()},
				{name: "Повесить картину" , id:101, desc:'Мама попросила меня повесить картину на стену. Для того чтобы это сделать, для начала мне нужно будет найти гвозди и молоток, Где они находятся? Это загадка, которую нужно будет разгадать. После этого выбрать место для картины и прибить её. Изи.', goals: [{id:100, text: "Найти загадочный молоток и гвозди.", done:true}, {id:101, text: "Выбрать место для картины",done:false}, {id:102, text: "Забить гвозди в стену молотком",done:false},{id:104, text: "Повесить картину на гвозди",done:false}],
						tags:'Просьба мамы, картина', color:'rgb(255, 159, 243)', isDone: false, isReady: false,date: new Date().toLocaleString() },
				{name: "Разработка приложения", id: 228, desc:'Хочу разработать это приложение от начала и доконца самостоятельно. Первым делом нужно сделать дизайн. Потом написать все приложение с помощью библиотеки React JS. После того как все будет готово я хочу изучить один из языков бэкенда и написать серверную часть для этого приложения (авторизацию, сохранение задач в базе данных и тд). И уже потом можно будет смело добавить эту работу в свое портфолио.', goals: [{text:"Сделать дизайн приложения", id: 100, done: true},{text:"Сделать верстку" , id:101 , done: true},{text: "Написать всю логику для приложения", id:102 , done: false}, {text: "Изучить один из языков бэкенда", id:432 , done: false}, {text: "Написать блок авторизации" , id: 235, done: false},{text:"Сделать сохранение задач в БД" , id:265 , done: false}, {text:"Залить готовый проект на хостинг" , id: 742, done: false}],
						tags:'Разработка, дизайн, frontend, backend', color:'rgb(254, 202, 87)', isDone: false, isReady: true, date: new Date().toLocaleString()},
				],*/
		modalView: false,
		modalInfo: null,
		currentTodoId: null,
	}
	
	maxId = 200;
	goalsId = 324;
	
	getDescription = (fill, e,idx) => {
		this.setState((state) => {
			const currentTodo = state.todos[idx].id;
			return {
				...state,
				todos: state.todos.map((todo) => {
					if(todo.id === currentTodo) {
						if (fill === "desc") {
							return {
								...todo,
								desc: e
							}
						}
						if (fill === "tags") {
							return {
								...todo,
								tags: e
							}
						}
					}
					return todo;
				})
			}
		})
	}

	setColor = (color, idx) => {
		this.setState((state) => {
			const currentTodo = state.todos[idx].id;
			return {
				...state,
				todos: state.todos.map((todo) => {
					if(todo.id === currentTodo) {
						return {
							...todo,
							color,
						}
					}
					return todo;
				})
			}
		})
	}

	createTodo = (e,name) => {
		e.preventDefault()

		this.setState(({todos}) => {
			const newArray = [
				{name, id: this.maxId, desc:'', goals: [],
				tags:'', color:'', isDone: false, isReady: false, date: new Date().toLocaleString()}, 
				...todos ];
    		return {
				...this.state,
    			todos: newArray
    		}
    	})

    	this.maxId++
    	this.modalToggle()

	}
	submitTodo = (idx) => {
		this.setState((state) => {
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === idx) {
						return {
							...todo,
							isReady: true,
						}
					}
					return todo;
				})
			}
		})
		this.modalToggle();
	}

	setDone = (idx) => {
		this.setState((state) => {
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === idx) {
						return {
							...todo,
							isDone: true,
						}
					}
					return todo;
				})
			}
		})
		this.modalToggle();
	}

	modalToggle = (type=null) => {
		this.setState((state) => {
			const {modalView} = this.state;
			return {
				...state,
				modalView: !modalView,
				modalInfo: type,
			}
		})
	}

	onGoalAdded = (text, idx) => {
		this.setState((state) => {
			const currentTodo = state.todos[idx].id;

			const goal = {
				text,
				id: Date.now(),
				done:false,
			}
			return {
				...state,
				todos: state.todos.map((todo) => {
					if(todo.id === currentTodo) {
						return {
							...todo,
							goals: [...todo.goals, goal]
						}
					}
					return todo;
				})
			}
		})
	}

	checkGoal = (idn,idx) => {
		this.setState((state) => {
			const currentTodo = state.todos[idx].id;
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === currentTodo) {
						return {
							...todo,
							goals: todo.goals.map((goal) => {
								if (goal.id === idn) {
									return {
										...goal,
										done: !goal.done
									}
								}
								return goal;
							})
						}
					}
					return todo;
				})
			}
		});
	}

	deleteTodo = (e, id) => {
		e.preventDefault()

		this.setState((state) => {
			const idx = state.todos.findIndex(el => el.id === id);
			const newArr = [
				...state.todos.slice(0, idx),
				...state.todos.slice(idx+1),
			  ]

			return {
				...state,
				todos: newArr,
			}
		})
		this.modalToggle()
	}

	deleteGoal = (id,parentIdx) => {
		this.setState((state) => {
			const currentTodo = state.todos[parentIdx].id;
			const currentGoal = state.todos[parentIdx].goals.findIndex(el => el.id === id);
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === currentTodo) {
						return {
							...todo,
							goals: [...todo.goals.slice(0,currentGoal),
								...todo.goals.slice(currentGoal+1)]
						}
					}
					return todo;
				})
			}
		})
	}

	setCurrentTodoId = (id) => {
		this.setState({
			currentTodoId: id
		})
	}

    render() {
		const {todos, modalView, modalInfo, currentTodoId} = this.state;
		
		const {
			  	getDescription, createTodo,
			  	modalToggle, onGoalAdded, setColor,
				submitTodo, checkGoal, deleteTodo,
				setDone,deleteGoal,setCurrentTodoId
			  } = this;

        return (
            <div className="App">

            	{modalView ?
	            	<Modal
	            		modalToggle={modalToggle}
	            		modalInfo={modalInfo} 
						createTodo={createTodo}
						deleteTodo={deleteTodo}
						submitTodo={submitTodo}
						setDone={setDone}
						currentTodoId={currentTodoId}
					/> : null}

		    	<Sidebar
		    		todos={todos}
					modalToggle={modalToggle}
					setCurrentTodoId={setCurrentTodoId}
		    	/>

		    	<Content
		    		getDescription={getDescription}
		    	    todos={todos}
					onGoalAdded={onGoalAdded}
					setColor={setColor}
					modalToggle={modalToggle}
					checkGoal={checkGoal}
					deleteGoal={deleteGoal}
					currentTodoId={currentTodoId}
		    	/>
		    </div>
        )
    }
}

export default App;