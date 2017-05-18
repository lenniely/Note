import React, {Component} from 'react'

class Clock extends Component {
	constructor(){
		super();
		this.state = {currentTime: new Date()};
	}

	componentWillMount(){
		this.timer = setInterval(
			() => {
				this.setState(
					{currentTime: new Date()}
				);
			}, 1000);
	}

	componentWillUnMount(){
		clearInterval(this.timer);
	}
	render(){
		return (
			<div>
				<h1> 现在的时间是： </h1>
				{this.state.currentTime.toLocaleTimeString()}
			</div>
		);
	}
}

export default Clock;