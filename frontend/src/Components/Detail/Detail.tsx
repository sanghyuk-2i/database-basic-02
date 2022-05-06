import React from "react";
import Amount from "./Amount/Amount";
import DetailList from "./DetailList/DetailList";

const Detail = (): JSX.Element => {
	return (
		<div className="w-3/12 pl-4 h-screen border-l border-gray">
			<div className="flex mb-4 justify-between items-center">
				<h3 className="font-semibold text-xl">장바구니</h3>
				<button className="px-4 py-1 bg-red-200 text-red-400 rounded-md">Clear</button>
			</div>
			<DetailList />
			<Amount />
		</div>
	);
};

export default Detail;
