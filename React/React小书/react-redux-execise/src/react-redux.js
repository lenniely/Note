import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export connect = (wrappedComponent) =>{
	class Connect extends Component {
		static contextTypes = {
	 		store: PropTypes.object
	 	};

	 	render(){
		 	return <wrappedComponent /> 
		 }
	};
	return Connect;
};

