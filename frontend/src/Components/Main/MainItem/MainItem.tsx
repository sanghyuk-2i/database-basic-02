import React from "react";
import { ItemState } from "../../../Modules/Items";

const MainItem = ({ name, explain, price }: ItemState): JSX.Element => {
	return (
		<div className="p-2 flex items-center bg-white rounded-3xl drop-shadow-2xl cursor-pointer">
			<img className="m-2 w-20 h-20" src="./logo192.png" alt="item picture" />
			<div className="px-2">
				<h4 className="text-xl font-semibold">{name}</h4>
				<p>{explain}</p>
				<span className="text-pink-600 font-bold">{`${price}원`}</span>
			</div>
		</div>
	);
};

export default MainItem;
