import React from "react";
import MainItem from "../MainItem/MainItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../Modules";
import { ModeState } from "../../../Modules/Nav";
import AddItem from "../../AddItem/AddItem";

const MainLists = (): JSX.Element => {
	const data: [] = useSelector((state: RootState) => state.Items);
	const navState: ModeState = useSelector((state: RootState) => state.Nav);

	return (
		<div>
			{navState.add ? (
				<AddItem />
			) : (
				<div className="py-4 grid grid-cols-2 gap-4">
					{data.map((item, index) => (
						<MainItem {...item} key={`item_${index + 1}`} />
					))}
				</div>
			)}
		</div>
	);
};

export default MainLists;
