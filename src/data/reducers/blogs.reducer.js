import { GET_BLOGS } from "../actions/blogs.actions";

const initialState = {
	posts: [],
};

export default function Blog(state = [], action) {
	switch (action.type) {
		case "FETCH_POSTS":
			return action.payload;
		default:
			return state;
	}
}
