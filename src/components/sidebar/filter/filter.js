import React from 'react';
import './filter.scss';

const Filter = ({changeFilter,currentFilter}) => {

  const items = ["A","D","R"];
  const filterItem = items.map((el) => el === currentFilter ? <div className="filter-item current" onClick={() => changeFilter(el)}>{el}</div> :
  <div className="filter-item" onClick={() => changeFilter(el)}>{el}</div>);

  return (
    <div className="Filter">
      Фильтр
      {filterItem}
    </div>
  )
}
export default Filter;