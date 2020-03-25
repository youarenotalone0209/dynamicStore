import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<Navbar bg="dark" expand="md" variant="dark">
				<Navbar.Brand as={Link} to="/">Web Apps Demo</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link as={Link} to="/ecommerce">Ecommerce</Nav.Link>
						<Nav.Link as={Link} to="/pos">POS</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBar;