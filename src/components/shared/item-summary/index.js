import React, { Component } from 'react';
import { buildCartItem } from '../../../services/package';

import { connect } from 'react-redux';
import { addPrice } from '../../../actions';

class ItemSummary extends Component {
	constructor(props) {
		super(props);
		this.currentItem = buildCartItem(this.props.item.packageId, this.props.item.addOns, this.props.item.quantity);
		this.props.addPrice(this.currentItem.price);
	}

	renderAddOn() {
		if (this.currentItem.addOnPackages && this.currentItem.addOnPackages.length > 0) {
			return this.currentItem.addOnPackages.map((item, index) => {
				return (<p key={index}>Add On Package: {item.header} - Price: ${item.price}</p>);
			});
		}
	}

	render() {
		return (
			<div className="item-summary">
				<div className="item-summary-image">
					<img className="image" src={`../../../assets/${this.currentItem.imageUrl}`} alt={this.currentItem.header} />
				</div>
				<div className="item-summary-desc">
					<p>{this.currentItem.header}</p>
					<p>{this.currentItem.subHeader}</p>
					<p>${this.currentItem.price} (Shipping & AddOns Included)</p>
					<p>Quantity: {this.currentItem.quantity}</p>
					{this.renderAddOn()}
				</div>				
				<hr></hr>
			</div>
		);
	}
}

export default connect(null, { addPrice })(ItemSummary);
