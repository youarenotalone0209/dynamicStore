export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_PRICE = 'ADD_PRICE';
export const CLEAR_PRICE = 'CLEAR_PRICE';
export const ADD_USER_INFO = 'ADD_USER_INFO';
export const CLEAR_CART = 'CLEAR_CART';
export const CLEAR_USER_INFO = 'CLEAR_USER_INFO';
export const INITIALIZE = 'INITIALIZE';

export function addToCart(pkgId, addOns, quantity) {
	const action = {
		type: ADD_TO_CART,
		pkgId,
		addOns,
		quantity
	};
	return action;
}

export function clearCart() {
	const action = {
		type: CLEAR_CART
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

export function addUserInfo(userInfo) {
	const action = {
		type: ADD_USER_INFO,
		userInfo
	};
	return action;
}

export function clearUserInfo() {
	const action = {
		type: CLEAR_USER_INFO
	};
	return action;
}

export function initialize() {
	const action = {
		type: INITIALIZE
	};
	return action;
}