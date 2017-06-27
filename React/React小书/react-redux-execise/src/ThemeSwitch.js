import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
	static contextTypes = {
		store: PropTypes.object
	};

	constructor(){
		super();
		this.state = {themeColor: ''};
	}

	componentWillMount(){
		_updateThemeColor();
	}

	_updateThemeColor(){
		const store = this.context;
		const state = store.getState();
		this.setState({ themeColor : state.themeColor });
	}

	render () {
		return (
			<div>
				<button style={{this.state.themeColor}}>Red</button>
				<button style={{this.state.themeColor}}>Blue</button>
			</div>
		);
	}
}

export default ThemeSwitch;