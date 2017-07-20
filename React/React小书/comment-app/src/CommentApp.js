// import React, { Component } from 'react'
// import CommentInput from './CommentInput'
// import CommentList from './CommentList'

// class CommentApp extends Component{
// 	constructor(){
// 		super();
// 		this.state = {
// 			comments: []
// 		}
// 	}
// 	componentWillMount(){
// 		let comments = localStorage.getItem('comments');
// 		if(comments) {
// 			comments = JSON.parse(comments);
// 			this.setState({
// 				comments
// 			});
// 		}
// 	}
// 	handleSubmit(comment){
// 		this.state.comments.push(comment);
// 		this.setState({
// 			comments: this.state.comments,
// 		});
// 		this._saveComments(this.state.comments);
// 	}
// 	handleDelCmt(index){
// 		let cmts = this.state.comments;
// 		cmts.splice(index, 1);
// 		this.setState({
// 			comments: cmts
// 		});
// 		this._saveComments(cmts);
// 	}
// 	_saveComments(comments){
// 		localStorage.setItem('comments', JSON.stringify(comments));
// 	}

// 	render(){
// 		return(
// 			<div className='wrapper'>
// 				<CommentInput onSubmit={this.handleSubmit.bind(this)} />
// 				<CommentList comments={this.state.comments} onDelCmt={this.handleDelCmt.bind(this)} />
// 			</div>
// 		);
// 	}
// }

// export default CommentApp;