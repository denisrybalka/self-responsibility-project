import React from 'react';

import './sign.scss';

const Sign = ({data}) => {
  const signText = data.length ? "Выберите задачу из списка слева" : "Список задач пока пуст"

  return <div className="Sign">{signText}</div>
}

export default Sign;