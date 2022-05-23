import React, { useMemo } from "react";
import MainItem from "../MainItem/MainItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../Modules";
import { ModeState } from "../../../Modules/Nav";
import AddItem from "../../AddItem/AddItem";
import { SearchState } from "../../../Modules/Search";
import { ItemState } from "../../../Modules/Items";
import Customer from "../../Customer/Customer";

const MainLists = (): JSX.Element => {
	const data: ItemState[] = useSelector((state: RootState) => state.Items);
	const navState: ModeState = useSelector((state: RootState) => state.Nav);
	const searchState: SearchState = useSelector((state: RootState) => state.Search);

	const updateData = useMemo(() => {
		if (searchState === "") {
			return data;
		}
		return data.filter((item) => item.name.includes(searchState));
	}, [searchState]);

	return (
		<div>
			{navState.add || navState.customer ? (
				navState.add ? (
					<AddItem />
				) : (
					<Customer />
				)
			) : (
				<div className="py-4 grid grid-cols-2 gap-4">
					{updateData.map((item, index) => (
						<MainItem {...item} key={`item_${index + 1}`} />
					))}
				</div>
			)}
		</div>
	);
};

export default MainLists;
