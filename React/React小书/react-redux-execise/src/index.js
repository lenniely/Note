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

Class Index extends Component {
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