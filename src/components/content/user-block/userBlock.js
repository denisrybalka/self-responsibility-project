import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import Settings from '../settings'

import './userBlock.scss'

class UserBlock extends Component {
  state = {
    settingsView: false,
  }

  toggleView = () => {
    this.setState(({settingsView}) => {
      return {
        settingsView: !settingsView
      }
    })
  }

  render() {
    const {settingsView} = this.state;
    const {toggleView} = this;

    return (
      <div className="UserBlock">
        <Link to="/login"><div className="auth">Войти</div></Link>
        <Link to="/register"><div className="auth">Зарегистрироваться</div></Link>
        <Settings toggleView={toggleView} view={settingsView}/>
      </div>
    )
  }
}

export default UserBlock;