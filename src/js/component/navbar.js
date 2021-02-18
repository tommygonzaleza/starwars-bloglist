import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">STAR WARS BLOGLIST</span>
			</Link>
			<div className="ml-auto d-inline-block">
				<Link to="/information/people">
					<span className="navbar-brand mb-0 h1">PEOPLE</span>
				</Link>
				<Link to="/information/planets">
					<span className="navbar-brand mb-0 h1">PLANETS</span>
				</Link>
				<Link to="/information/vehicles">
					<span className="navbar-brand mb-0 h1">VEHICLES</span>
				</Link>
				<Link to="/information/favorites">
					<span className="navbar-brand mb-0 h1">
						<i
							className="fas fa-star bg-light text-dark rounded p-2"
							style={{
								fontSize: "1.3rem",
								cursor: "pointer"
							}}
						/>
						<span style={{ position: "relative", bottom: "1rem", left: "0.3rem" }}>
							{store.favorites.length > 0 ? store.favorites.length : ""}
						</span>
					</span>
				</Link>
			</div>
		</nav>
	);
};
