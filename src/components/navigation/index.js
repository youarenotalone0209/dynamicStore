import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = function() {
	return (
		<Navbar bg="dark" expand="md" variant="dark">
			<Navbar.Brand as={Link} to="/">Travel Planner</Navbar.Brand>
			{/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={Link} to="/ecommerce">Ecommerce</Nav.Link>
					<Nav.Link as={Link} to="/ecommerce"></Nav.Link>
					<NavDropdown title="Ecommerce" id="basic-nav-dropdown">
						<NavDropdown.Item as={Link} to="/ecommerce">Live Demo</NavDropdown.Item>
					</NavDropdown> 
				</Nav>
			</Navbar.Collapse> */}
		</Navbar>
	);
};

export default NavBar;