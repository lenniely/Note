import React, { Component } from 'react'
//Demo of event
class Title extends Component{
	handleClickOnTitle(word){
		console.log('Click on title.');
		console.log(this, word);
	}
	render(){
		return (
			<h1 onClick={this.handleClickOnTitle.bind(this,'hello')} >React 小书 </h1>
			)
	}
}
export default Title;

