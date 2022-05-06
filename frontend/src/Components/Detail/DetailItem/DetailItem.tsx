import React from "react";

const DetailItem = (): JSX.Element => {
	return (
		<div className="py-4 flex justify-around items-center">
			<img className="m-1 w-10 h-10" src="./logo192.png" alt="item picture" />
			<div>
				<h4 className="text-sm font-semibold">허니버터칩</h4>
				<p className="text-xs">분류 : 과자</p>
				<span className="text-sm text-pink-600 font-bold">600원</span>
			</div>
			<div>
				<button className="w-6 h-6 bg-cyan-100 rounded">+</button>
				<p className="py-1 text-sm text-center">1</p>
				<button className="w-6 h-6 bg-cyan-100 rounded">-</button>
			</div>
		</div>
	);
};

export default DetailItem;
