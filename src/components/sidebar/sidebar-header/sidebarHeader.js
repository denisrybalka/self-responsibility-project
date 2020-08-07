import React from 'react';
import './sidebarHeader.scss'
import {Link} from 'react-router-dom';

const SidebarHeader = (props) => {
  return (
    <div className="SidebarHeader">
    	<Link to="/"><div className="all-tasks">Все задачи</div></Link>
    </div>
  )
}

export default SidebarHeader;