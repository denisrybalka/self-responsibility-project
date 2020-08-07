import React from 'react';

import './goalsBlock.scss'

import Goal from '../goal/goal.js'
import InputGoal from'../input-goal/input-goal.js'


class GoalsBlock extends React.Component {

	state = {
		visible: false,
	}

	maxId = 0;


	showInput = () => {
		this.setState(({visible}) => {
			return {
				visible: !visible
			}
		})
	}

  render() {
  	const {goalsList,onGoalAdded, parentIdx, isReady, checkGoal,deleteGoal} = this.props;
  	const {visible} = this.state;
	const {showInput} = this;

 
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
		  
	const RenderInput = () => {
		if (visible) {
		  return (
			<InputGoal
				showInput={showInput}
				onGoalAdded={onGoalAdded}
				parentIdx={parentIdx}
			/>
		  )
		}
		return null;
	}

  	return (
	    <div className="GoalBlock">
	    	<div className="goals-title">Цели для выполнения этой задачи</div>

			{goalsList ? mappedGoals : null}

			{isReady ? null :
			  <>
				<div
					className="create-goal"
					onClick={showInput}>
					Добавить новую цель
				</div>
				<RenderInput/>
			  </>
			}

	    </div>
	  )
  }
}

export default GoalsBlock;