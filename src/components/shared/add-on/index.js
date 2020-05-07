import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

class AddOn extends Component {
	constructor(props) {
		super(props);
		this.addOn = this.props.addOn;
	}

	onClickCheckBox(event) {
		this.addOn.selected(event.target.value, event.target.checked);
	}

	render() {
		return (
			<div className="add-on">
				<input 
					onClick={(e) => this.onClickCheckBox(e)} 
					type="checkbox" 
					className="check-box" 
					value={this.addOn.item.id} 
					ref={this.addOn.item.id}
				></input>

				<OverlayTrigger
					placement="bottom"
					overlay={
						<Tooltip>
							{this.addOn.item.description}
						</Tooltip>
					}
				>
					<p className="add-on-header">Add-On: {this.addOn.item.header} <i className="fa fa-exclamation-circle"></i></p>
				</OverlayTrigger>
				<p>Price: ${this.addOn.item.price}</p>
			</div>
		);
	}
}

export default AddOn;