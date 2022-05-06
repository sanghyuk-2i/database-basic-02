import React from "react";
import MainLists from "./MainLists/MainLists";
import Nav from "./Nav/Nav";

const Main = (): JSX.Element => {
	return (
		<div className="w-9/12 pr-4 h-screen">
			<Nav />
			<MainLists />
		</div>
	);
};

export default Main;
