import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Container, Nav, NavDropdown } from "react-bootstrap";
import { fetchSinglePost } from "../../data/actions/blogs.actions";
import Navbar from "../Navbar/navbar";
const BlogDetails = ({ postData, fetchSinglePost }) => {
	// useEffect(() => {
	// 	fetchSinglePost();
	// }, []);
	// console.log("Blogs", postData);
	const [post, setPost] = useState({});
	let { id } = useParams();
	useEffect(() => {
		setPost(id);
		if (id) {
			axios
				.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
				.then((res) => {
					setPost(res.data);
					console.log("data", res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);
	// const blogDetail = () => {
	// 	navigate(`${id}`);
	// };
	return (
		<>
			<Navbar />
			<div style={{ marginTop: "30px" }}>
				<Container>
					<Card>
						<Card.Body>
							<Card.Text
								style={{
									fontSize: "20px",
									textTransform: "capitalize",
									color: "#000",
									textAlign: "center",
								}}
							>
								{post?.title}
							</Card.Text>
						</Card.Body>
						<Card.Img
							variant="top"
							style={{ borderRadius: "10px" }}
							src="https://wp-asset.groww.in/wp-content/uploads/2021/07/26102958/Nippon-India-NFO_Jul22.png"
						/>
					</Card>
					<Card.Body>
						<Card.Text
							style={{
								fontSize: "20px",
								textTransform: "capitalize",
								color: "#000",
							}}
						>
							{post?.body}
						</Card.Text>
					</Card.Body>
				</Container>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		postData: state.post,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchSinglePost: () => dispatch(fetchSinglePost()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetails);
