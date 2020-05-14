import { combineReducers } from 'redux';
import { 
	ADD_TO_CART,
	ADD_PRICE,
	CLEAR_PRICE,
	ADD_USER_INFO,
	CLEAR_CART, 
	CLEAR_USER_INFO,
	INITIALIZE
} from '../actions';

function items(state = [], action) {
	switch(action.type) {
	case ADD_TO_CART: {
		state = [...state, { 
			packageId: action.pkgId,
			quantity: action.quantity,
			addOns: action.addOns
		}];
		localStorage.setItem('items', JSON.stringify(state));
		return state;
	}
	case CLEAR_CART:
		state = [];
		localStorage.removeItem('items');
		return state;
	default:
		state = JSON.parse(localStorage.getItem('items')) || state;
		return state;
	}
}

function price(state = 0, action) {
	switch(action.type) {
	case ADD_PRICE: {
		state = parseFloat(state) + parseFloat(action.price);
		localStorage.setItem('price', state.toFixed(2));
		return state.toFixed(2);
	}
	case CLEAR_PRICE: {
		state = 0;
		localStorage.removeItem('price');
		return state;
	}
	default:
		state = localStorage.getItem('price') || state;
		return state;
	}
}

function userInfo(state = {}, action) {
	switch(action.type) {
	case ADD_USER_INFO: {
		state = action.userInfo;
		localStorage.setItem('userInfo', JSON.stringify(state));
		return state;
	}
	case CLEAR_USER_INFO:
		state = {};
		localStorage.removeItem('userInfo');
		return state;
	default:
		state = JSON.parse(localStorage.getItem('userInfo')) || state;
		return state;
	}
}

function initializeStore(state = false, action) {
	switch(action.type) {
	case INITIALIZE: {
		state = true;
		return state;
	}
	default:
		return state;
	}
}

const rootReducer = combineReducers({
	items,
	price,
	userInfo,
	initializeStore
});
  
export default rootReducer;