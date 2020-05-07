import packageData from '../constant/packages';
import addOns from '../constant/addons';

export function findPackage(id) {
	const selectedPackage = packageData.find(pkg => parseInt(id, 10) === pkg.id);

	if (!selectedPackage) {
		return null;
	}

	if (selectedPackage.addOns) {
		selectedPackage.addOnPackages = [];
		addOns.forEach(addOnPkg => {
			if (selectedPackage.addOns.indexOf(addOnPkg.id) !== -1) {
				selectedPackage.addOnPackages.push(addOnPkg);
			}
		});
	}

	return selectedPackage;
}

export function buildCartItem(selectedPackageId, selectedAddOns, quantity) {
	const item = {...findPackage(selectedPackageId)};
	const addOnPackages = [];
	let addOnPrice = 0;
	
	if (selectedAddOns.length > 0) {
		item.addOnPackages.forEach((addOn) => {
			if (selectedAddOns.indexOf(addOn.id.toString()) !== -1) {
				addOnPackages.push(addOn);
			}
		});

		addOnPrice = item.addOnPackages.reduce((acc, pkg) => {
			acc = pkg.price + parseFloat(acc);
			return acc;
		}, 0);
	}

	item.addOnPackages = addOnPackages;
	item.price = (item.price * quantity) + item.shippingCost + parseFloat(addOnPrice);
	item.price = item.price.toFixed(2);
	item.quantity = quantity;
	return item;
}

export function getTotalPrice() {
	return;
}