import React, {Component} from 'react';
import Clock from './Clock';

class ClockShow extends Component{
	constructor(){
		super();
		this.state = {
			isShowClock: true
		};
	}

	handleClockShow(){
		this.setState({
			isShowClock: !this.state.isShowClock
		});
	}

	render(){
		return (
			<div>
				{this.state.isShowClock? <Clock /> : null}
				<button onClick={this.handleClockShow.bind(this)} >显示/隐藏时钟
				</button>
			</div>
		);
	}
}

export default ClockShow;