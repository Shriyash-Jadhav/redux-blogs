import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const navbar = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/home">Bloggy</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default navbar;
