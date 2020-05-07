export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_PRICE = 'ADD_PRICE';
export const CLEAR_PRICE = 'CLEAR_PRICE';

export function addToCart(pkgId, addOns, quantity) {
	const action = {
		type: ADD_TO_CART,
		pkgId,
		addOns,
		quantity
	};
	return action;
}

export function addPrice(price) {
	const action = {
		type: ADD_PRICE,
		price: price
	};
	return action;
}

export function clearPrice() {
	const action = {
		type: CLEAR_PRICE
	};
	return action;
}