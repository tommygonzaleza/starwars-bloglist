import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

import { MyCarousel } from "../component/MyCarousel";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center m-5">
			<MyCarousel type="planets" />
			<MyCarousel type="people" />
			<MyCarousel type="vehicles" />
		</div>
	);
};
