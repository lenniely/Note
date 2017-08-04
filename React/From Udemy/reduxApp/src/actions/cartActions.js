"use strict"

//Add To Cart
export function addToCart (book) {
	return {
		type:"ADD_TO_CART",
		payload: book
	}
}