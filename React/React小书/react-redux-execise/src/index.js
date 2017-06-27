import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PropTypes from 'prop-types'
import registerServiceWorker from './registerServiceWorker';
import Header from './Header'
import Content from './Content'
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

function createStore(reducer){
	let state = null;
	const listeners = [];
	const subscriber = (listener) => listeners.push(listener);
	const getState = () => state;
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener());
	}
	dispatch({});
	return{getState, dispatch, subscriber};
}

const themeReducer = (state, action) => {
	if(!state) return{
		themeColor: 'red'
	};
	switch(action.type){
		case 'CHANGE_COLOR':
			return{...state, themeColor: action.themeColor};
		default: 
			return state;
	}
}

const store = createStore(themeReducer);

Class Index extends Component {
	static childContextTypes = {
		store: PropTypes.object
	};

	getChildContex(){
		return {store};
	}

	render () {
		return (
			<div>
				<Header />
				<Content />
			</div>
		);
	}
}

ReactDOM.render(
	<Index />, 
	document.getElementById('root')
);