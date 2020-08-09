import React, {useState, useEffect} from 'react';

import './goalsBlock.scss'

import Goal from '../goal/goal.js'



const GoalsBlock = ({goalsList,onGoalAdded, parentIdx, isReady, checkGoal,deleteGoal}) => {

	const [isVisible,setVisible] = useState(false);
	const [input, setInput] = useState('');
	const [value,setValue] = useState(0);

	useEffect(() => {
		setValue(parentIdx);
		if (value !== parentIdx) {
			setInput('');
			setVisible(false);
		}
	},[parentIdx,value]);

	const createGoal = (e) => {
		e.preventDefault();
		onGoalAdded(input,parentIdx);
		setInput('');
	}


  	const mappedGoals = !!goalsList &&
	  	goalsList.map(el =>
	  		<Goal
		  		label={el.text}
		  		id={el.id}
				key={el.id}
				isDone={el.done}
				parentIdx={parentIdx}
				checkGoal={checkGoal}
				deleteGoal={deleteGoal}
	  		/>
		  );

  	return (
	    <div className="GoalBlock">
	    	<div className="goals-title">Цели для выполнения этой задачи</div>

			{goalsList ? mappedGoals : null}

			{!isReady ? 
				<div
					className="create-goal"
					onClick={setVisible}>
					Добавить новую цель
				</div> : null
			}
			{isVisible && !isReady ?
				<form onSubmit={(e) => createGoal(e)}>
					<input
						className="create-input sample-input"
				    	placeholder="Текст цели"
				    	value={input}
				    	onChange={e => setInput(e.target.value)}
				    	required minLength="3" maxLength="45"
				    />

				    <button className="create-btn main-btn">Добавить цель</button>
				    <button className="secondary-btn" onClick={() => setVisible(!isVisible) }>Отмена</button>
				</form> : null
			}

	    </div>
	  )
  }

export default GoalsBlock;