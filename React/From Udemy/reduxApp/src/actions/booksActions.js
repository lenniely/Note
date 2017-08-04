"use strict"

//Post Book

export function postBooks(books){
	return {
		type: "POST_BOOK", 
		payload: books
	}
}

//Delete Book
export function DelBook (book){
	return {
		type: "DELETE_BOOK", 
		payload: book
	}
}
//Update Book
export function updateBook (book){
	return {
		type: "UPDATE_BOOK", 
		payload: book
	}
}