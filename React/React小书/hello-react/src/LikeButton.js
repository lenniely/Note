import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import './index.css'

class LikeButton extends Component{
	static defaultProps = {
		likedText: '取消',
		unLikedText: '点赞'
	};
	constructor(){
		super();
		this.state = {isLiked: false};
	}

	handleClickOnLikeButton(){
		this.setState({
			isLiked: !this.state.isLiked
		});
	}

	render(){
		const likedText = this.props.likedText //若不设置defaultProps 应改为 const likedText = this.props.likedText || '取消';
		const unLikedText = this.props.unLikedText //若不设置defaultProps 应改为 const unLikedText = this.props.unLikedText || '点赞';
		return (
			<button onClick={this.handleClickOnLikeButton.bind(this)} >
				{this.state.isLiked ? likedText : unLikedText}
			</button>
			);
	}

}

export default LikeButton;