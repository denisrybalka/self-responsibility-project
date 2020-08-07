import React from 'react';

import './goal.scss'

const Goal = ({id,parentIdx,label,isDone,checkGoal,deleteGoal}) => {

	let labelStyle = "goal-text";

	if (isDone) {
		labelStyle += ' label-checked';
	}

  return (
	<div className="Goal">
		<input
			className="goal-checkbox"
			type="checkbox" id={id}
			name="happy"
			checked={isDone}
			onChange={() => checkGoal(id,parentIdx)}
		/>
		<label className={labelStyle} htmlFor={id}>{label}</label>
		<div className="item-delete" onClick={() => deleteGoal(id,parentIdx)}></div>
    </div>
  )
}

export default Goal;