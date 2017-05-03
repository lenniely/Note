import React, { Component } from 'react'

class commentInput extends Component {
	constructor(){
		super();
		this.state ={
			username: '',
			usercommnet: ''
		};
	}

	handleUserNameChange(e){
		this.setState({
			username: e.target.value
		});
	}

	handleCommentChange(e){
		this.setState({
			 usercommnet: e.target.value
		});
	}

	render(){
		return(
			<div className='comment-input'>
				<div>
					<label htmlFor='userName'>用户名</label>
					<input id='userName' type='text' value={this.state.username} onChange={this.handleUserNameChange.bind(this)}/>
				</div>
				<div>
					<label htmlFor='comment'>评论</label>
					<textarea id='comment' rows='10' value={this.state.usercommnet} onChange={this.handleCommentChange.bind(this)}/>
				</div>
				<div>
					<button type='submit'>发布</button>
				</div>
			</div>
		);
	}
}

export default commentInput;