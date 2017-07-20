import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Comment from './Comment'

class CommentList extends Component {
	static propTypes = {
		comments: PropTypes.array,
		onDeleteComment: PropTypes.func
	};

	static default = {
		comments : []
	};

	handleDelComment(index){
		if(this.props.onDeleteComment){
			this.props.onDeleteComment(index);
		}	
	}

	render(){
		return (
			<div>
				{this.props.comments.map((cmt, i) => 
					<Comment 
					key={i} 
					index={i} 
					comment={cmt} 
					OnDeletecmt={this.handleDelComment.bind(this)}
					/>
				)}
			</div>
		);
	}
}

export default CommentList;