import React, { Component } from 'react'

import './input-goal.scss'

class InputGoal extends Component {

	state = {
		text:'',
	}

	changeLabel = (e) => {
		this.setState({
			text: e.target.value,
		})
	}

	onSubmitted = (e) => {
		e.preventDefault();

		const {onGoalAdded,parentIdx} = this.props;
		const {text} = this.state;

		const goal = {
			text,
			id: Date.now(),
			done: false,
		}

		onGoalAdded(goal, parentIdx)

		this.setState({
			text: '',
		})
	}

    render() {
    	const {text} = this.state;
    	const {changeLabel} = this;
    	const {showInput} = this.props;
    	
        return (
			<form onSubmit={(e) => this.onSubmitted(e)}>

				<input
					className="create-input sample-input"
			    	placeholder="Текст цели"
			    	value={text}
			    	onChange={changeLabel}
			    	required minLength="3" maxLength="35"
			    />

			    <button className="create-btn main-btn">Добавить цель</button>
			    <button className="secondary-btn" onClick={showInput}>Отмена</button>
			</form>
		)
    }
}

export default InputGoal;
