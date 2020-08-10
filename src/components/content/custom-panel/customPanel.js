import React from 'react';
import './customPanel.scss'
import ColorPalette from '../color-palette/colorPalette'

const CustomPanel = ({getDescription,idx,setColor,currentTodo}) => {

  const {tags,isReady,color,date} = currentTodo;

  const TagsDiv = () => {
    return (
      <div className="tags-input sample-input">
        {tags}
      </div>
    )
  }
  
  return (
    <div className="CustomPanel">
        <div className="tags-title">{isReady ? "Тэги к этому заданию" : "Добавить тэги к заданию"}</div>

        {isReady? <TagsDiv/> :
          <input
            className="tags-input sample-input"
            placeholder="Введите тэги"
            onChange={(e) => getDescription("tags",e.target.value, idx)}
            maxLength="50"
            value={tags}
          /> 
        }    

        <div className="colors-title">Изменить цвет задания</div>

        <ColorPalette
          changeColor={setColor}
          idx={idx}
          isReady={isReady}
          todoColor={color}
        />     

        <div className="deadline-title">Таймер выполнения</div> 
        <div className="deadline-title">Выполнить задачу до:</div>
        {isReady ? <div className="time-title">Дата создания:<br/>{date}</div> : null}
    </div>
  )
}

export default CustomPanel;