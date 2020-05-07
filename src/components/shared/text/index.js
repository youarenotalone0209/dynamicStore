import React from 'react';

const Text = function(props) {
	return (
		<div className="text-component">
			<p>{props.text}</p>
		</div>
	);
};

export default Text;