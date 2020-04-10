import packageData from '../constant/packages';

export function findPackage(id) {
	return packageData.find(pkg => parseInt(id, 10) === pkg.id);
}