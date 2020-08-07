import React from 'react';

import './fillPanel.scss'

import GoalsBlock from '../goals-block/goalsBlock.js'

const FillPanel = ({getDescription, idx, desc, goalsList, onGoalAdded, parentIdx, isReady,checkGoal,deleteGoal}) => {


	const SampleDiv = () => {
		return (
			<div 
				className="sample-input desc-input">
				{desc}
			</div>
		)
	}

  return (
    <div className="FillPanel">
		<div className="desc-title">Описание задачи</div>

		{isReady ? <SampleDiv/> : 
			<textarea
				className="sample-input desc-input"
				placeholder="Текст описания задачи"
				onChange={(e) => getDescription("desc",e.target.value, idx)}
				value={desc}
			/>
		}

		<GoalsBlock
			goalsList={goalsList}
			onGoalAdded={onGoalAdded}
			parentIdx={parentIdx}
			idx={idx}
			isReady={isReady}
			checkGoal={checkGoal}
			deleteGoal={deleteGoal}
		/>
		
	</div>
  )
}

export default FillPanel;