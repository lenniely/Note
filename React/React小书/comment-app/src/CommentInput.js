import React, { Component } from 'react'

class commentInput extends Component {
	constructor(){
		super();
		this.state ={
			username: '',
			usercomment: ''
		};
	}

	handleUserNameChange(e){
		this.setState({
			username: e.target.value
		});
	}

	handleCommentChange(e){
		this.setState({
			 usercomment: e.target.value
		});
	}

	handleSubmit(e){
		const {username, usercomment} = this.state;
		if(this.props.onSubmit){
			this.props.onSubmit({username, usercomment});
		}
		this.setState({
			usercomment: ''
		});
	}

	render(){
		return(
			<div className='comment-input'>
				<div className='comment-field'>
		          <span className='comment-field-name'>用户名：</span>
		          <div className='comment-field-input'>
		          	<input value={this.state.username} onChange={this.handleUserNameChange.bind(this)} required />
		          </div>
		        </div>

		        <div className='comment-field'>
		          <span className='comment-field-name'>评论内容：</span>
		          <div className='comment-field-input'>
		            <textarea value={this.state.usercomment} onChange={this.handleCommentChange.bind(this)} required/>
		          </div>
				</div>
				<div className='comment-field-button'>
		          <button onClick={this.handleSubmit.bind(this)}>
		            发布
		          </button>
		        </div>
			</div>
		);
	}
}

export default commentInput;