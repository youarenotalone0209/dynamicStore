import React, { Component } from 'react';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';

class DropDownSelector extends Component {
	constructor(props) {
		super(props);
        
		this.state = {
			currentSelection: 0,
			disableButton: true
		};
		this.settings = this.props.settings;
	}

	onSelect(selectedObj) {
		this.setState({
			currentSelection: selectedObj.selection,
			disableButton: selectedObj.selection === 0
		});
	}

	buttonClick() {
		this.settings.btnClick(this.state.currentSelection);
	}

	render() {
		return (
			<Dropdown as={ButtonGroup} className="drop-down-selector" size={this.settings.btnSize}>
				<Button onClick={() => this.buttonClick()} className="drop-down-button" disabled={this.state.disableButton} variant="success">Add to Cart: {this.state.currentSelection}</Button>
				<Dropdown.Toggle variant="outline-success"/>
				<Dropdown.Menu className="drop-down-menu">
					{ 
						this.settings.selectionList.map((selection, index) => {
							return (
								<Dropdown.Item key={index} onSelect={() => this.onSelect({selection})}>{selection}</Dropdown.Item>
							);
						})
					}
				</Dropdown.Menu>
			</Dropdown>
		);
	}
}

export default DropDownSelector;
