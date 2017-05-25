import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Comment extends Component{
	static propTypes = {
		comment: PropTypes.object.isRequired,
		handleDelComment: PropTypes.func,
		index: PropTypes.number
	};

	constructor(){
		super();
		this.state = {
			timeString: ''
		};
	}

	componentWillMount(){
		this._updateTimeString();
		this.timeInterval = setInterval(this._updateTimeString.bind(this), 5000);
	}

	componentWillUnMount(){
		clearInterval(this.timeInterval);
	}

	handleDelClick(){
		if(this.props.OnDeletecmt){
			this.props.OnDeletecmt(this.props.index);
		}
	}
	
	_updateTimeString(){
		const duration = (+new Date() - this.props.comment.createdtime)/1000;
		this.setState({
			timeString : duration > 3600 ?  `${Math.round(duration/3600)} 小时前` :  (duration > 60? `${Math.round(duration/60)}分钟前` : `${Math.round(Math.max(duration, 1))} 秒前`)
		});
	}

	render(){
		return (
			<div className='comment'>
				<div className='comment-user'>
					<span>{this.props.comment.username} : </span>
				</div>
				<p>{this.props.comment.usercomment}</p>

				<span className='comment-createdtime'>{this.state.timeString}</span>
				<span className='comment-delete' onClick={this.handleDelClick.bind(this)}>
		          删除
		        </span>
			</div>
		);
	}
}

export default Comment;