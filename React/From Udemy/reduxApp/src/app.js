"use strict"
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import logger from 'redux-logger';
import React from 'React'
import ReactDOM from 'react-dom'
import {addToCart} from './actions/cartActions';
import {postBooks, DelBook, updateBook} from './actions/booksActions';
import BooksList from './components/pages/BooksList'
import {Provider} from 'react-redux'

// //STEP 1 create the store
// const store = createStore(reducer);

const minddleware = applyMiddleware(logger);
const store = createStore(reducers, minddleware);

// store.subscribe(() => {
// 	console.log("current state is: ", store.getState());
// 	//console.log("current state is: ", store.getState()[1].id);
// });
// //STEP 2 create and dispatch actions

store.dispatch( postBooks([
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
	]));

// store.dispatch(updateBook({
// 			id: 2,
// 			title: "Book Title - 2",
// 			description: "This is the second book description. updated description."
// 		}));

// --> CART ACTIONS <<--
//ADD to cart

store.dispatch(addToCart([{id: 2}]));

ReactDOM.render(
	<Provider store={store}>
		<BooksList />
	</Provider> , 
	document.getElementById('app'));


