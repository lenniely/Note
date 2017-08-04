"use strict"

//CART REDUCERS

export function cartReducers (state = {cart:[]}, action){
	switch(action.type){
		case "ADD_TO_CART": 
			return {cart:[...state.cart, ...action.payload]};
			break;
		case "DEL_CART":
			break;
		case "UPDATE_CART":
			break;
		default:
			return state;
	}
	return state;
}