import React, { Component } from 'react';
import PackageTile from '../shared/package-tile';

import packageData from '../../data/tours';

class Tours extends Component {
	render() {
		return (
			<div>
				<div className="ecommerce">
					{
						packageData.map(item => {
							return (
								<PackageTile key={item.id} packageDetail={item} />
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default Tours;