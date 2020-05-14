import React, { Component } from 'react';

import { connect } from 'react-redux';
import history from '../../../services/history';

import { clearUserInfo, clearCart, clearPrice } from '../../../actions';

class Confirmation extends Component {
	constructor(props) {
		super(props);
		if (!Object.keys(this.props.userInfo).length) {
			history.push('/');
		} else {
			this.userInfo = this.props.userInfo;
			this.maskedCart = '**** **** **** ' + this.userInfo.cardNumber.slice(this.userInfo.cardNumber.length - 4);
			this.props.clearCart();
		}
	}

	componentWillUnmount() {
		this.props.clearUserInfo();
		this.props.clearPrice();
	}

	render() {
		return (
			!this.userInfo ? <div></div> :
				<div className="confirmation">
					<h3>Your order has been placed!</h3>
					<h5>Order details:</h5>
					<p>Price: $ {this.props.price}</p>

					<hr></hr>
				
					<h5>Receipient:</h5>
					<p>{this.userInfo.firstName} - {this.userInfo.lastName}</p>
					<p>{this.userInfo.email}</p>
					<p>{this.userInfo.address} - {this.userInfo.city}</p>
					<p>{this.userInfo.state} {this.userInfo.zip}</p>

					<hr></hr>

					<h5>Payment:</h5>
					<p>{this.maskedCart}</p>

					<h5>Here is a smiling dogs pictures:</h5>
					<img className="confirmation-picture" src='../../../../assets/smiling-dogs.jpg' alt='Smiling Dogs' />

				</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo,
		items: state.items,
		price: state.price
	};
}
  
export default connect(mapStateToProps, {clearUserInfo, clearPrice, clearCart})(Confirmation);