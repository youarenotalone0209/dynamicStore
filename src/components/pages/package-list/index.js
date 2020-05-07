import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearPrice } from '../../../actions';

import PackageTile from '../../shared/package-tile';
import packageData from '../../../constant/packages';

class PackageList extends Component {
	constructor(props) {
		super(props);
		this.props.clearPrice();
	}

	render() {
		return (
			packageData.map(item => {
				return (
					<PackageTile key={item.id} packageDetail={item} />
				);
			})
		);
	}
}


export default connect(null, { clearPrice })(PackageList);
