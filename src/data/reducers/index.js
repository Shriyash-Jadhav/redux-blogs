import { combineReducers } from "redux";
import blogsReducer from "./blogs.reducer";
import blogReducer from "./blog.reducer";
const rootReducer = combineReducers({
	posts: blogsReducer,
	post: blogReducer,
});

export default rootReducer;
