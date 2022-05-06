import React from "react";

const MainItem = (): JSX.Element => {
	return (
		<div className="p-2 flex items-center bg-white rounded-3xl drop-shadow-2xl cursor-pointer">
			<img className="m-2 w-20 h-20" src="./logo192.png" alt="item picture" />
			<div className="px-2">
				<h4 className="text-xl font-semibold">허니버터칩</h4>
				<p>분류 : 과자</p>
				<span className="text-pink-600 font-bold">600원</span>
			</div>
		</div>
	);
};

export default MainItem;
