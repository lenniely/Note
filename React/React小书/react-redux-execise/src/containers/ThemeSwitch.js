import React from 'react'
import { connect } from 'redux-react'
import ThemeSwitch from '../containers/ThemeSwitch'


const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSwitchTheme : (color) => {
			dispatch({type: 'CHANGE_COLOR', themeColor:color});
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
