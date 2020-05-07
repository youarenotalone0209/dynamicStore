import { combineReducers } from 'redux';
import { ADD_TO_CART, ADD_PRICE, CLEAR_PRICE } from '../actions';

function items(state = [], action) {
	switch(action.type) {
	case ADD_TO_CART: {
		state = [...state, { 
			packageId: action.pkgId,
			quantity: action.quantity,
			addOns: action.addOns
		}];
		return state;
	}
	default:
		return state;
	}
}

function price(state = 0, action) {
	switch(action.type) {
	case ADD_PRICE: {
		state = parseFloat(state) + parseFloat(action.price);
		return state.toFixed(2);
	}
	case CLEAR_PRICE: {
		state = 0;
		return state;
	}
	default:
		return state;
	}
}

const rootReducer = combineReducers({
	items,
	price
});
  
export default rootReducer;