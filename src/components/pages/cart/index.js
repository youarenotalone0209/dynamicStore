import React, { Component } from 'react';
import history from '../../../services/history';

import { connect } from 'react-redux';

import {Button} from 'react-bootstrap';

import ItemSummary from '../../shared/item-summary';

class CartView extends Component {
	constructor(props) {
		super(props);

		if (this.props.items.length === 0) {
			history.push('/');
		}
	}

	renderItem() {
		return this.props.items.map((item, index) => {
			return (<ItemSummary key={index} item={item}></ItemSummary>);
		});
	}

	checkout() {
		history.push('/demographic');
	}

	render() {
		return (
			<div className="cart-summary">
				<div className="title">
					<h3>Your Cart</h3>
				</div>
				{this.renderItem()}
				<p>Your cart will be saved for only 5 minutes - if you refresh the application after 5 minutes, all cart items will be removed</p>
				<div className="total">
					<p>Total: ${this.props.price}</p>
					<Button onClick={() => this.checkout()}>Checkout</Button>

				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		items: state.items,
		price: state.price
	};
}
  
export default connect(mapStateToProps, null)(CartView);