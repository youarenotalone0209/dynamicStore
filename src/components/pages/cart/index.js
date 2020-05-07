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
		return this.props.items.map((item) => {
			return (<ItemSummary key={item.packageId} item={item}></ItemSummary>);
		});
	}

	checkout() {
		alert('The checkout page is being worked on - please comeback later');
	}

	render() {
		return (
			<div className="cart-summary">
				{this.renderItem()}
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