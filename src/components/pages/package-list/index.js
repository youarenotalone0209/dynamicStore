import React from 'react';

import PackageTile from '../../shared/package-tile';

import packageData from '../../../constant/packages';

const PackageList = function() {
	return (
		packageData.map(item => {
			return (
				<PackageTile key={item.id} packageDetail={item} />
			);
		})
	);
};

export default PackageList;