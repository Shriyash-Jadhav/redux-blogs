import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Container, Nav, NavDropdown } from "react-bootstrap";
import { fetchPosts } from "../../data/actions/blogs.actions";
import { useNavigate } from "react-router-dom";
import { Route, Switch } from "react-router";
import Navbar from "../Navbar/navbar";
const Hero = ({ postsData, fetchPosts, id }) => {
	// const navigate = useNavigate();
	useEffect(() => {
		fetchPosts();
	}, []);
	// console.log("Blogs", postsData);

	// const blogDetail = () => {
	// 	navigate(`${id}`);
	// };
	return (
		<>
			<Navbar />
			<div style={{ marginTop: "30px" }}>
				<Container>
					{postsData &&
						postsData.map((posts) => (
							<Link
								to={`/home/${posts?.id}`}
								style={{ textDecoration: "none" }}
							>
								<Card
									style={{
										marginBottom: "25px",
										cursor: "pointer",
										textDecoration: "none",
									}}
									border="primary"
									// onClick={blogDetail}
								>
									<Card.Header
										style={{
											textTransform: "capitalize",
											color: "#000",
										}}
									>
										{posts?.title}
									</Card.Header>
									<Card.Body>
										<blockquote className="blockquote mb-0">
											<p
												style={{
													textTransform: "capitalize",
													color: "#000",
												}}
											>
												{" "}
												{posts?.body}{" "}
											</p>
											<footer className="blockquote-footer">
												Someone famous in{" "}
												<cite title="Source Title">Source Title</cite>
											</footer>
										</blockquote>
									</Card.Body>
								</Card>
							</Link>
						))}
				</Container>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		postsData: state.posts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPosts: () => dispatch(fetchPosts()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
