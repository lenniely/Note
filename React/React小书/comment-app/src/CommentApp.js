import React， {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
	render(
		<div>
			<CommentInput />
			<CommentList />
		</div>
	);
}