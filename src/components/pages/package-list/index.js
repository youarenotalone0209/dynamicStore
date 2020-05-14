import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearPrice, initialize } from '../../../actions';

import PackageTile from '../../shared/package-tile';
import packageData from '../../../constant/packages';

class PackageList extends Component {
	constructor(props) {
		super(props);
		this.props.clearPrice();

		const currentTimeStamp = Date.now();
		const saveTimeStamp = localStorage.getItem('timeStamp');
		if (!this.props.initializeStore && (currentTimeStamp - saveTimeStamp) / 60000 > 5) {
			localStorage.removeItem('price');
			localStorage.removeItem('userInfo');
			localStorage.removeItem('items');
			localStorage.setItem('timeStamp', currentTimeStamp);
			this.props.initialize();
		}

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

function mapStateToProps(state) {
	return {
		initializeStore: state.initializeStore
	};
}
  
export default connect(mapStateToProps, { clearPrice, initialize })(PackageList);
