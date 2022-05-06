import React from "react";
import MainItem from "../MainItem/MainItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../Modules";

const MainLists = (): JSX.Element => {
	const data: [] = useSelector((state: RootState) => state.Items);

	return (
		<div className="py-4 grid grid-cols-2 gap-4">
			{data.map((item, index) => (
				<MainItem {...item} key={`item_${index + 1}`} />
			))}
		</div>
	);
};

export default MainLists;
