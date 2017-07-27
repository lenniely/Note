"use strict"
import { createStore} from 'redux';

//STEP 3 define reducers
const reducer = function(state = {"books": []}, action){
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

//STEP 1 create the store
const store = createStore(reducer);

store.subscribe(() => {
	console.log("current state is: ", store.getState());
	//console.log("current state is: ", store.getState()[1].id);
});
//STEP 2 create and dispatch actions

store.dispatch({
	type: "POST_BOOK", 
	payload: [
		{
			id: 1,
			title: "Book Title",
			description: "This is a book description"
		},
		{
			id: 2,
			title: "Book Title - 2",
			description: "This is the second book description"
		},
		{
			id: 3,
			title: "Book Title - 3",
			description: "This is the third book description"
		}
	]
});

store.dispatch({
	type: "UPDATE_BOOK", 
	payload: {
			id: 2,
			title: "Book Title - 2",
			description: "This is the second book description. updated description."
		}
	
});