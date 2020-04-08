import React, { Component } from 'react';
import history from '../../services/history';

class PackageTile extends Component {
	constructor(props) {
		super(props);
		this.package = this.props.packageDetail;

		this.styles = {
			backgroundImage: `url('./assets/${this.package.imageUrl}')`,
			backgroundSize: 'cover',
			opacity: 0.9
		};
	}

	routeToPackageDetails() {
		console.log('sup');
		history.push(`/packageDetails/${this.package.id}`);
	}

	render() {
		return (
			<div className="package-tile" style={this.styles} onClick={() => this.routeToPackageDetails()}>
				<h4>{this.package.header}</h4>
				<div className="package-tile-desc">
					<p className="desc-text">{this.package.subHeader}</p>
					<p className="desc-price">{'$' + this.package.price}</p>
				</div>
			</div>
		);
	}
}

export default PackageTile;