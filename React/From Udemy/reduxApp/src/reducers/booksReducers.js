"use strict"

//Book Reducers.
export function booksReducers (state = {"books": []}, action) {
	switch(action.type){
		case "POST_BOOK":
			// let books = state.books.concat(action.payload);
			// return {"books": books};
			return {"books":[...state.books, ...action.payload]};
			break;
		case "DELETE_BOOK":
			const booksObjs = [...state.books];
			const itemIndex = booksObjs.findIndex(function(book){
				return book.id == action.payload.id;
			});
			//console.log(itemIndex);
			return {"books": [...state.books.slice(0, itemIndex), ...state.books.slice(itemIndex+1)]};
			break;
		case "UPDATE_BOOK":
			const booksObjsUpd = [...state.books];
			const itemIndexUpd = booksObjsUpd.findIndex(function(book){
				return book.id == action.payload.id;
			});
			const updatedBook = {...booksObjsUpd.itemIndexUpd, "description":action.payload.description, "title": action.payload.title}
			return {"books": [booksObjsUpd.slice(0, itemIndexUpd), updatedBook, booksObjsUpd.slice(itemIndexUpd+1)]};
			break;
	}
	return state;
};