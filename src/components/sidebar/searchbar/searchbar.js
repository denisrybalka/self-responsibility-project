import React from 'react';
import './searchbar.scss'

const Searchbar = ({changeTerm,term}) => {
  
    return (
      <div className="Searchbar">
        <input placeholder="Поиск задачи" onChange={(e) => changeTerm(e)} value={term}/>
      </div>
    )
}

export default Searchbar;