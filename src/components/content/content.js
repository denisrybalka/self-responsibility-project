import React from 'react';
import {Route,Switch} from 'react-router-dom';

import './content.scss'

import Sign from './sign/sign.js';
import UserBlock from './user-block/userBlock.js'
import Todo from './todo/todo.js';
import ErrorBoundary from '../errorBoundary/error';
import Authentication from './authentication'

const Content = ({getDescription, todos, currentTodoId , onGoalAdded,setColor,submitTodo,modalToggle, checkGoal, deleteGoal}) => {

  return (
    <div className="Content">
	    <UserBlock/>
	    <Switch>
		    <Route
				path="/"
				exact
				render={() => {
					return <Sign data={todos}/>
			}}/>
		    <Route
		    	path="/todo-item/:id"
		    	render={() => {
				  return (
					<ErrorBoundary>
						<Todo
							getDescription={getDescription}
							todos={todos}
							onGoalAdded={onGoalAdded}
							setColor={setColor}
							submitTodo={submitTodo}
							modalToggle={modalToggle}
							checkGoal={checkGoal}
							deleteGoal={deleteGoal}
							currentTodoId={currentTodoId}
						/>
					</ErrorBoundary>
				  );
			    }}/>
			<Route path="/login" component={Authentication}/>
			<Route path="/register" component={Authentication}/>
	    </Switch>
    </div>
  )
}

export default Content;