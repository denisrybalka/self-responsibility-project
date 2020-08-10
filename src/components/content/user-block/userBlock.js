import React, {useState} from 'react';
import {Link} from 'react-router-dom'

import Settings from '../settings'

import './userBlock.scss'

const UserBlock = () => {
  const [isView, setView] = useState(false);

  return (
    <div className="UserBlock">
      <Link to="/login"><div className="auth">Войти</div></Link>
      <Link to="/register"><div className="auth">Зарегистрироваться</div></Link>
      <div className="settings" onClick={() => setView(!isView)}></div>
      {isView ? <Settings/> : null}
    </div>
  )
}

export default UserBlock;