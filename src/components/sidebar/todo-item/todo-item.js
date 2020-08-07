import React from 'react';
import {Link} from 'react-router-dom';

import './todo-item.scss'

const TodoItem = ({todo, modalToggle, setCurrentTodoId}) => {
	const {name, ready, done, color, id, goals} = todo;
	const goalCount = goals.length;
	const goalDone = goals.filter(goal => goal.done).length;

	const dottedName = name.length >= 18 ? name.split('').map((a,b) => b >= 15 ? '' : a).join('').concat('...') : name;

	let itemGoalsStyle = "item-goals";

	if (goalCount / goalDone > goalDone) {
		itemGoalsStyle += " item-goal-low";
	}

	if (goalCount / goalDone === goalDone) {
		itemGoalsStyle += " item-goal-premedium";
	}

	if (goalCount / goalDone < goalDone) {
		itemGoalsStyle += " item-goal-medium"
	}

	if (goalCount / goalDone === 1) {
		itemGoalsStyle = "item-goals"
	}

  	const bgc = ready ? null : "#ffffcc";

  return (
	<Link key={id} to={`/todo-item/${id}`}>
	    <div className="TodoItem" onClick={() => setCurrentTodoId(id)} style={{backgroundColor:`${done ? "#49DD9C" : bgc}`}}>
	    	<div className="item-color" style={{backgroundColor:`${color}`}}></div>
  			<div className="item-text" style={done ? {color:"#fff"} : null}>{dottedName}</div>
			{done || !ready ? null : <div className={itemGoalsStyle}>{`${goalDone}/${goalCount}`}</div>}
		    <div className="item-delete" onClick={() => modalToggle("delete")}></div>
	    </div>
	</Link>
  )
}

export default TodoItem;