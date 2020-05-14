import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class NavBar extends Component {
	render() {
		let cartItemTotal = this.props.items.length;
		let disableCart = cartItemTotal === 0;
		return (
			<Navbar bg="dark" expand="md" variant="dark">
				<Navbar.Brand as={Link} to="/">Travel Planner</Navbar.Brand>
				<Nav.Link disabled={disableCart} as={Link} className="ml-auto" to="/cartView">Cart: {cartItemTotal}</Nav.Link>
			</Navbar>
		);
	}
}

function mapStateToProps(state) {
	return {
		items: state.items
	};
}
  
export default connect(mapStateToProps, null)(NavBar);