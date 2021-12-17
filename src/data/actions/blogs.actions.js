import blogAPI from "../apis/blogAPI";
import axios from "axios";
import { useParams } from "react-router-dom";

export const fetchPosts = () => async (dispatch) => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/posts"
	);
	dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchSinglePost = () => async (dispatch) => {
	let { id } = useParams();
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);
	dispatch({ type: "FETCH_POST", payload: response.data });
};
