export function checkProps(prop, obj, shouldSatisfy) {
	// get the object, MINUS the leading property
	let parts = prop.split('.').reverse(),
		theProperty;

	if (!shouldSatisfy) {
		shouldSatisfy = function() {
			return true; 
		};
	}
	parts.pop();
	theProperty = propExists(obj, parts);
	return theProperty && shouldSatisfy(theProperty);
}

function propExists(obj, parts) {
	if (!obj) {
		return;
	}

	if (parts.length === 0) {
		return obj;
	}
	return propExists(obj[parts.pop()], parts);
}

export function validArray(array) {
	return Array.isArray(array) && array.length;
}