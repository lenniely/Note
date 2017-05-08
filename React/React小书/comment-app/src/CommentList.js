import React, { Component } from 'react'
import Comment from './Comment.js'

class CommentList extends Component {
	static default = {
		comments : []
	};
	render(){
		return (
			<div>
				{this.props.comments.map((cmt, i) => <Comment key={i} comment={cmt} />)}
			</div>
		);
	}
}

export default CommentList;