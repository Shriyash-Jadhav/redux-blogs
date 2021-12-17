import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "../Navbar/navbar";

const NotFound = () => {
	return (
		<div>
			<Navbar />
			<div style={{ textAlign: "center" }}>
				<h1
					className="not-found-page-h1"
					style={{ fontSize: "350px", color: "#0B5ED7" }}
				>
					404
				</h1>
				<h4>OPPS! PAGE NOT FOUND</h4>
				<p>
					Sorry but the page you are looking for does not exist, have been
					removed, name changed or is temporarity unavailable.
				</p>
				<Link to={`/home`} style={{ textDecoration: "none" }}>
					<Button variant="outline-primary">Back to Blogs</Button>{" "}
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
