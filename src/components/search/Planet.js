import React, { Component,PropTypes } from "react";

export default class Planet extends Component {

	constructor(props){
		super(props); 		 	
	}
	planetStyle(){
		let planetStyle={
			background: 'brown',
			display: 'inline-block',
			borderRadius: '50%',
			height: this.props.height+'px',
			width: this.props.width+'px',
			float: 'left',
			fontSize:this.props.fontSize+'px',
			margin: '20px',
			textAlign: 'center',
			verticalAlign: 'middle',
			color:'#fff',
			lineHeight: '100px'
	}
	return planetStyle
	}
	
	render() {
		return (
			<div style={this.planetStyle()}>
				<p>
				{this.props.name}
				</p>
			</div>
		);
	}
}

Planet.propTypes={
	width:PropTypes.number.isRequired,
	height:PropTypes.number.isRequired,
	fontSize:PropTypes.number.isRequired,
	name:PropTypes.string.isRequired
}
