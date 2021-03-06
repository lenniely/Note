import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class ThemeSwitch extends Component {
	// static contextTypes = {
	// 	store: PropTypes.object,
	// };

	// constructor(){
	// 	super();
	// 	this.state = {themeColor: ''};
	// }

	// componentWillMount(){
	// 	const { store } = this.context;
	// 	this._updateThemeColor();
	// 	store.subscribe(() => this._updateThemeColor());

	// }

	// _updateThemeColor(){
	// 	const { store } = this.context;
	// 	const state = store.getState();
	// 	this.setState({ themeColor : state.themeColor });
	// }

	// handleColorChange(color){
	// 	const { store } = this.context;
	// 	const state = store.dispatch({type: 'CHANGE_COLOR', themeColor: color});
	// }

	// render () {
	// 	return (
	// 		<div>
	// 			<button style={{color: this.state.themeColor}} onClick={this.handleColorChange.bind(this, 'red')}>Red</button>
	// 			<button style={{color: this.state.themeColor}} onClick={this.handleColorChange.bind(this, 'blue')}>Blue</button>
	// 		</div>
	// 	);
	// }

	static propTypes = {
		themeColor: PropTypes.string,
		onSwitchColor: PropTypes.func
	};

	handleColorChange(color){
		if(this.props.onSwitchColor){
			this.props.onSwitchColor(color);
		}
	}

	render () {
		return (
			<div>
				<button style={{color: this.props.themeColor}} onClick={this.handleColorChange.bind(this, 'red')}>Red</button>
				<button style={{color: this.props.themeColor}} onClick={this.handleColorChange.bind(this, 'blue')}>Blue</button>
			</div>
		);
	}
}


const mapSateToProps = (state) => {
	return {themeColor: state.themeColor};
};

const mapDispatchProps = (dispatch) => {
	return {
		onSwitchColor : (color) => {
			dispatch({type: 'CHANGE_COLOR', themeColor:color});
		}
	};
};

ThemeSwitch = connect(mapSateToProps, mapDispatchProps)(ThemeSwitch);
export default ThemeSwitch;