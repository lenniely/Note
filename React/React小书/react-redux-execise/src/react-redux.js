import React, { Component } from 'react';
import PropTypes from 'prop-types';


export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
	class Connect extends Component {
		static contextTypes = {
			store: PropTypes.object
		};

		constructor() {
			super();
			this.state = {allProps: {}};
		}

		componentWillMount(){
			const {store} = this.context;
			this._updateState();
			this.subscribe = (() => this._updateState());
		}

		_updateState(){
			const {store} = this.context;
			let stateProps = mapStateToProps? mapStateToProps(store.getState(), this.props) : {};
			let dispatchProps = mapDispatchToProps? mapDispatchToProps(store.dispatch, this.props): {};
			this.setState({
				allProps: {...stateProps, ...dispatchProps, ...this.props}
			});

		}

		render(){

			return <WrappedComponent {...this.state.allProps}/>
		}

	}

	return Connect;
};
