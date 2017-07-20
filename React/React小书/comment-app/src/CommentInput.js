// import React, { Component } from 'react'

// class commentInput extends Component {
// 	constructor(){
// 		super();
// 		this.state ={
// 			username: '',
// 			usercomment: '',
// 			createdtime: ''
// 		};
// 	}


// 	componentWillMount(){
// 		// const name = localStorage.getItem('username');
// 		// this.setState({
// 		// 	username: name
// 		// });
// 		const commentsObj = JSON.parse(localStorage.getItem('comments'));
// 		const name = commentsObj[commentsObj.length-1] ? commentsObj[commentsObj.length-1].username : '';
// 		this.setState({
// 			username: name
// 		});
// 	}

// 	componentDidMount(){
// 		this.textarea.focus();
// 	}

// 	handleUserNameChange(e){
// 		this.setState({
// 			username: e.target.value
// 		});
// 	}

// 	handleCommentChange(e){
// 		this.setState({
// 			 usercomment: e.target.value
// 		});
// 	}

// 	handleSubmit(e){
// 		// const {username, usercomment, createdtime} = this.state;
// 		this.setState({
// 			usercomment: ''
// 		});
// 		if(this.props.onSubmit){
// 			this.props.onSubmit({
// 				username: this.state.username, 
// 				usercomment: this.state.usercomment, 
// 				createdtime: +new Date()
// 			});
// 		}

// 	}

// 	handleUserNameBlur(e){
// 		//localStorage.setItem('username',e.target.value);
// 	}


// 	render(){
// 		return(
// 			<div className='comment-input'>
// 				<div className='comment-field'>
// 		          <span className='comment-field-name'>用户名：</span>
// 		          <div className='comment-field-input'>
// 		          	<input value={this.state.username} onChange={this.handleUserNameChange.bind(this)} onBlur={this.handleUserNameBlur.bind(this)} required />
// 		          </div>
// 		        </div>

// 		        <div className='comment-field'>
// 		          <span className='comment-field-name'>评论内容：</span>
// 		          <div className='comment-field-input'>
// 		            <textarea ref={(textarea) => this.textarea = textarea} value={this.state.usercomment} onChange={this.handleCommentChange.bind(this)} required/>
// 		          </div>
// 				</div>
// 				<div className='comment-field-button'>
// 		          <button onClick={this.handleSubmit.bind(this)}>
// 		            发布
// 		          </button>
// 		        </div>
// 			</div>
// 		);
// 	}
// }

// export default commentInput;