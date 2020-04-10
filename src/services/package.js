import packageData from '../data/tours';

export function findPackage(id) {
	return packageData.find(pkg => parseInt(id, 10) === pkg.id);
}