// import state for using state
import React, { useState } from "react";

// import axios for handling https req & res
import axios from "axios";

// import all component that contain in Main.js
import Header from "./Header";
import TagLine from "./TagLine";
import DateTime from "./DateTime";
import Error from "./Error";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import Footer from "./Footer";

//call context api
import Context from "../Context";

const Main = () => {
	// using useState, set value and its changing method
	const [weather, setWeather] = useState();
	const [city, setCity] = useState();
	const [error, setError] = useState();

	// build async function for handling axios req & res
	const api_call = async (e) => {
		e.preventDefault();
		const location = e.target.elements.location.value;
		if (!location) {
			return setError("Please Enter a city Name!") || setWeather(null);
		}
		// call openWeather api's id/key and url
		const API_KEY = "62ec622036ebc180a58f3378ba2e8df9";
		const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
		const request = axios.get(URL);
		const response = await request;
		// changing state value
		setWeather(response.data.main);
		setCity(response.data.name);
		setError(null);
		// console.log(response);
	};
	weather && console.log(weather);

	return (
		<div className="main">
			<Header />
			<Content>
				<TagLine />
				<DateTime />
				{/* for passing data using context api  */}
				<Context.Provider value={{ api_call, weather, city }}>
					<WeatherSearch />
					{weather && <WeatherData />}
					{error && <Error error={error} />}
				</Context.Provider>
				<Footer />
			</Content>
		</div>
	);
};

export default Main;
