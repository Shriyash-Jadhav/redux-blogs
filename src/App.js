import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/navbar";
import BlogDetails from "./components/Hero/blogDetails";
import NotFound from "./components/Hero/NotFound";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/home" exact element={<Hero />} />
				<Route path="/home/:id" exact element={<BlogDetails />} />
				<Route path="*" exact element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
