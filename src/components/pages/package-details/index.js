import React, { Component } from 'react';
import history from '../../../services/history';

import Selection from '../../shared/stepper';

import { checkProps } from '../../../services/utilities';
import { findPackage } from '../../../services/package';


class PackageDetails extends Component {
	constructor(props) {
		super(props);

		const matchObj = this.props.match;
		this.currentPackage = null;

		if (checkProps('matchObj.params.id', matchObj)) {
			this.currentPackage = findPackage(matchObj.params.id);
		} 
		
		if (!this.currentPackage) {
			history.push('/');
		}
		console.log(this.currentPackage);
	}

	render() {
		return (
			<div className="package-details">
				<img className="package-image" src={`../../../../assets/${this.currentPackage.imageUrl}`} alt={this.currentPackage.header} />
				<div className="package-options">
					<h6>{this.currentPackage.header}</h6>
					<h6>{this.currentPackage.subHeader}</h6>
					<h4>${this.currentPackage.price}</h4>
				</div>
				
				<div className="package-desc">
					<Selection limit={this.currentPackage.limit} />
					{/* <p className="desc">{this.currentPackage.description}</p> */}
				</div>
				
			</div>
		);
	}
}

export default PackageDetails;