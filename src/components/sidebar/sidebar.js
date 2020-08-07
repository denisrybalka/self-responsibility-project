import React from 'react';

import './sidebar.scss';

import SidebarHeader from './sidebar-header/sidebarHeader'
import Searchbar from './searchbar/searchbar'
import Filter from './filter/filter'
import TodoList from './todo-list/todoList'
import CreateTodo from './create-todo/createTodo'

class Sidebar extends React.Component{

	state = {
		term: '',
		filt: ''
	}

	changeTerm = (e) => {
		this.setState({
			term: e.target.value
		})
	}

	search = (todos,term) => {
		if (term.length === 0) {
			return todos;
		} else {
			return todos.filter(todo => todo.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
		}
	}

	changeFilter = (filter) => {
		this.setState({
			filt: filter
		})
	}

	filter = (todos,filter) => {
		switch(filter) {
			case 'D' :
				return todos.filter((item) => item.done);
			case 'R' : 
				return todos.filter((item) => !item.ready);
			default :
				return todos;
		}
	}

	render() {
		const {todos,modalToggle,setCurrentTodoId} = this.props;
		const {term,filt} = this.state;	
		const {changeTerm,changeFilter} = this;
		const visibleItems = this.filter(this.search(todos,term),filt);

		return (
			<div className="Sidebar">
				<SidebarHeader/>
				<Searchbar changeTerm={changeTerm} term={term}/>
				<Filter changeFilter={changeFilter} currentFilter={filt}/>
				{todos ? <TodoList setCurrentTodoId={setCurrentTodoId} modalToggle={modalToggle} todos={visibleItems}/> : null }
				<CreateTodo modalToggle={modalToggle}/>
			</div>
		)
	}
}

export default Sidebar;