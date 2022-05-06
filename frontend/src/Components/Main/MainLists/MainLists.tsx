import React from "react";
import MainItem from "../MainItem/MainItem";

const MainLists = (): JSX.Element => {
	return (
		<div className="py-4 grid grid-cols-2 gap-4">
			{Array.from({ length: 5 }, () => (
				<MainItem />
			))}
		</div>
	);
};

export default MainLists;
