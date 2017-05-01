import React,  { Component } from 'react'

const users = [
	{ username: 'Jerry', age: 21, gender: 'male' },
	{ username: 'Tomy', age: 22, gender: 'male' },
	{ username: 'Lily', age: 19, gender: 'female' }
];

class User extends Component{
	render(){
		const {user} = this.props;
		return (
			<div>
				<div> name: {user.username}</div>
				<div> gender: {user.gender}</div>
				<div> age: {user.age}</div>
				<hr />
			</div>
			);
	}
}

class UserTest extends Component{
 render(){
 	return (
 		<div>
 			{users.map((user, i) => <User key={i} user={user} />)}
 		</div>
 	);
 }
}

export default UserTest;