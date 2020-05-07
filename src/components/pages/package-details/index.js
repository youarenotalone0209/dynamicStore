import React, { Component } from 'react';
import history from '../../../services/history';
import { connect } from 'react-redux';

import { addToCart } from '../../../actions';

import DropDownSelector from '../../shared/drop-down-selector';
import Text from '../../shared/text';
import AddOn from '../../shared/add-on';

import { checkProps } from '../../../services/utilities';
import { findPackage } from '../../../services/package';

class PackageDetails extends Component {
	constructor(props) {
		super(props);

		const matchObj = this.props.match;
		const selectionList = [0];

		this.selectedAddOn = [];
		this.currentPackage = null;
		this.dropDownSetting = {
			btnSize: 'lg',
			btnClick: this.addItemToCart.bind(this),
			selectionList: selectionList
		};

		if (checkProps('matchObj.params.id', matchObj)) {
			this.currentPackage = findPackage(matchObj.params.id);
		} 
		
		if (!this.currentPackage) {
			history.push('/');
		}
		
		if (this.currentPackage.limit) {
			for (let i = 0; i < this.currentPackage.limit; i++) {
				selectionList.push(i + 1);
			}
		}

		this.addAddOn = this.addAddOn.bind(this);
		this.addItemToCart = this.addItemToCart.bind(this);
	}

	addAddOn(value, checked) {
		if (checked) {
			this.selectedAddOn = [...this.selectedAddOn, value];
		} else {
			this.selectedAddOn = this.selectedAddOn.filter(addOn => {
				return addOn !== value;
			});
		}
	}

	addItemToCart(quantity) {
		this.props.addToCart(this.currentPackage.id, this.selectedAddOn, quantity);
		history.push('/cartView');
	}

	renderAddOn() {
		if (this.currentPackage.addOns) {
			return this.currentPackage.addOnPackages.map((item) => {
				const addOnData = {
					item,
					selected: this.addAddOn
				};

				return (<AddOn key={item.id} addOn={ addOnData }></AddOn>);
			});
		}
	}

	render() {
		return (
			<div className="package-details">
				<div className="package-image">
					<img className="image" src={`../../../../assets/${this.currentPackage.imageUrl}`} alt={this.currentPackage.header} />
				</div>

				<div className="package-options">
					<h6>{this.currentPackage.header}</h6>
					<h6>{this.currentPackage.subHeader}</h6>
					<h4>${this.currentPackage.price}</h4>
					<h6>Shipping Cost: ${this.currentPackage.shippingCost}</h6>

					<DropDownSelector settings={this.dropDownSetting} />

					{this.renderAddOn()}
				</div>

				<div className="package-decs">
					<Text text={this.currentPackage.description}></Text>
				</div>
			</div>
		);
	}
}

export default connect(null, { addToCart })(PackageDetails);