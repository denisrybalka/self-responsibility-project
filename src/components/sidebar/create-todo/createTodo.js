import React from 'react';

import './createTodo.scss';

const CreateTodo = ({modalToggle}) => {
  return (
    <div className="CreateTodo">
    	<div className="createTodo-inner" onClick={() => modalToggle("create")}>Новая задача</div>
    </div>
  )
}

export default CreateTodo;