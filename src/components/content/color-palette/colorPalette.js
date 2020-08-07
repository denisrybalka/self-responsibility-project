import React from 'react';
import './colorPalette.scss'

class ColorPalette extends React.Component {

	state = {
		clickedColor: null,
	}
	
	COLORS = ["rgb(255, 159, 243)","rgb(254, 202, 87)","rgb(255, 107, 107)",
					"rgb(72, 219, 251)","rgb(29, 209, 161)", "rgb(243, 104, 224)",
					"rgb(255, 159, 67)","rgb(238, 82, 83)","rgb(10, 189, 227)",
					"rgb(16, 172, 132)","rgb(0, 210, 211)","rgb(84, 160, 255)",
					"rgb(95, 39, 205)","rgb(200, 214, 229)","rgb(87, 101, 116)"];

	
	colorSubmit = (e) => {
		const {setColor,idx} = this.props;

		const currentColor = e.target.style.backgroundColor;
		setColor(currentColor, idx);

		this.setState({
			clickedColor: currentColor 
		})
	}

  render() {

	const {todoColor,isReady} = this.props;
	const {clickedColor} = this.state;
	const {COLORS,colorSubmit} = this;

	const CurrentColor = () => {
		return (
			<div className="color" style={{ backgroundColor: `${todoColor}` }}></div>
		)
	}

	const palette = COLORS.map(clr => clr === clickedColor ?
	<div className="color" key={clr} style={{ backgroundColor: `${clr}`,borderRadius: "60px" }} onClick={colorSubmit}></div> :
	<div className="color" key={clr} style={{ backgroundColor: `${clr}` }} onClick={colorSubmit}></div>);


	return (
		<div className="ColorPalette">{isReady ? <CurrentColor/> : palette}</div>
	  )
  }
}

export default ColorPalette;