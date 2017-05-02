import React， {Component} from 'react'

class commentInput extends Component {
	constructor(){
		super();
		this.state ={};
	}

	render(){
		return(
			<div>
				<div>
					<label htmlfor='userName'>用户名</lable>
					<input id='userName' type='text'/>
				</div>
				<div>
					<label htmlfor='comment'>评论</label>
					<input id='comment' type='textarea' col=255 row=50/>
				</div>
			</div>
		);
	}
}

export default commentInput;