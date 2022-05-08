import React from "react";
import { useDispatch } from "react-redux";
import { decrease, DetailState, increase } from "../../../Modules/Details";

const DetailItem = ({ name, explain, price, image, count = 1 }: DetailState): JSX.Element => {
	const dispatch = useDispatch();
	const handleIncrease = () => {
		console.log(count);
		dispatch(increase({ name, explain, price, image, count }));
	};
	const handleDecrease = () => {
		dispatch(decrease({ name, explain, price, image, count }));
	};
	return (
		<div className="py-4 flex justify-around items-center">
			<img className="m-1 w-10 h-10" src={`./${image}`} alt="item picture" />
			<div>
				<h4 className="text-sm font-semibold">{name}</h4>
				<p className="text-xs">{explain}</p>
				<span className="text-sm text-pink-600 font-bold">{`${price}원`}</span>
			</div>
			<div>
				<button className="w-6 h-6 bg-cyan-100 rounded" onClick={handleIncrease}>
					+
				</button>
				<p className="py-1 text-sm text-center">{count}</p>
				<button className="w-6 h-6 bg-cyan-100 rounded" onClick={handleDecrease}>
					-
				</button>
			</div>
		</div>
	);
};

export default DetailItem;
