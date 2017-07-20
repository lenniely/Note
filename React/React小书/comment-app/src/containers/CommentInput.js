import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comments'

class CommentInputContainer extends Component {
	static propTypes = {
		comments: PropTypes.array,
		onSubmit:PropTypes.func
	};

	constructor(){
		super();
		this.state = {username:''};
	}

	ComponentWillMount(){
		this._loadUsername();
	}

	_loadUsername(){
		const username = localStorage.getItem('username');
		if(username){
			this.setState({username});
		}
	}

	_saveUsername(username){
		localStorage.setItem('username', username);
	}

	handleSubmitComment (comment){
		if(!comment) return;
		if(!comment.username) return alert('Please input user name');
		if(!comment.usercomment) return alert ('Please input content');

		const {comments} = this.props;
		const newComments = [...comments, comment];
		localStorage.setItem('comments', JSON.stringify(newComments));
		//this.props.onSubmit is get from connedt
		if(this.props.onSubmit){
			this.props.onSubmit(comment);
		}
	}

	render(){
		return (
			<CommentInput username={this.state.username}
				onUserNameInputBlur={this._saveUsername.bind(this)}
				onSubmit
				={this.handleSubmitComment.bind(this)} />
		);
	}
}


const mapStateToProps = (state) => {
	return {
		comments: state.comments
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (comment) => {
			dispatch(addComment(comment));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentInputContainer);