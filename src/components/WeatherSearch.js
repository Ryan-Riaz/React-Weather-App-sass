import React, { useContext } from "react";

// call context func for using context api
import Context from "../Context";

const WeatherSearch = () => {
	// receiving value from its parent using useContext
	const { api_call } = useContext(Context);
	return (
		<div className="weather-search">
			<form className="weather-search__form" onSubmit={api_call}>
				<input
					name="location"
					autoComplete="off"
					className="weather-search__input"
					type="text"
				/>
				<div className="weather-search__submit">
					<button type="submit" className="weather-search__button">
						&rarr;
					</button>
				</div>
			</form>
		</div>
	);
};

export default WeatherSearch;
