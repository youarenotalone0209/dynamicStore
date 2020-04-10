import React, { Component } from 'react';
import history from '../../services/history';

import { checkProps } from '../../services/utilities';
import { findPackage } from '../../services/package';

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
	}

	render() {
		return (
			<div>
				<p>{this.currentPackage.header}</p>
				<p>{this.currentPackage.subHeader}</p>
			</div>
		);
	}
}

export default PackageDetails;