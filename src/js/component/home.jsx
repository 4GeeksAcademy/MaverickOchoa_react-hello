import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//include images into your bundle

import NavBar from "./NavBar";
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer"

//create your first component
const Home = () => {
	return (
		<div >
			<NavBar/>
			<Header/>
			<Cards />
			<Footer/>
		</div>
	);
};

export default Home;
