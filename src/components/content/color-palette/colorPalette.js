import React, {useState} from 'react';
import './colorPalette.scss'

const ColorPalette = ({todoColor,isReady,changeColor,idx}) => {
	const [color,setColor] = useState('');
	
	const COLORS = ["rgb(255, 159, 243)","rgb(254, 202, 87)","rgb(255, 107, 107)",
					"rgb(72, 219, 251)","rgb(29, 209, 161)","rgb(243, 104, 224)",
					"rgb(255, 159, 67)","rgb(238, 82, 83)","rgb(10, 189, 227)",
					"rgb(16, 172, 132)","rgb(0, 210, 211)","rgb(84, 160, 255)",
					"rgb(95, 39, 205)","rgb(200, 214, 229)","rgb(87, 101, 116)"];

	
	const colorSubmit = (e) => {
		const currentColor = e.target.style.backgroundColor;
		changeColor(currentColor, idx);
		setColor(currentColor);
	}

	const palette = COLORS.map(clr => clr === color ? <div className="color" key={clr} style={{ backgroundColor: `${clr}`,borderRadius: "60px" }} onClick={colorSubmit}></div> : <div className="color" key={clr} style={{ backgroundColor: `${clr}` }} onClick={colorSubmit}></div>);


	return (
		<div className="ColorPalette">{isReady ? <div className="color" style={{ backgroundColor: `${todoColor}` }}></div> : palette}</div>
	  )
}

export default ColorPalette;