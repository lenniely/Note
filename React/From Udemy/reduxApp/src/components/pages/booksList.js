"use strict"
import React, {Component} from "React"
import {connect} from 'react-redux'

class BooksList extends Component{
	render(){
		const booksList = this.props.books.map(function(book){
			return(
				<div key={book.id}>
					<h2>{book.title}</h2>
					<h2>{book.description}</h2>
				</div>
			);
		});

		return (
			<div>
				<h1>Test Redux </h1>
				{booksList}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		books: state.books.books
	};
}

export default connect(mapStateToProps)(BooksList);