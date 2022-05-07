import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Modules";
import { DetailState } from "../../../Modules/Details";

const Amount = (): JSX.Element => {
	const [usually, setUsually] = useState<number>(0);
	const [discount, setDiscount] = useState<number>(0);
	const [total, setTotal] = useState<number>(0);

	const basket: DetailState[] = useSelector((state: RootState) => state.Details);

	useEffect(() => {
		setTotal(usually - usually * (discount * 0.01));
	}, [usually, discount]);

	useEffect(() => {
		if (basket.length !== 0) {
			setUsually(basket.reduce((a, v) => (a += v.price * v.count), 0));
		}
		return () => {
			setUsually(0);
		};
	}, [basket]);
	return (
		<div className="p-4 bg-white drop-shadow-xl rounded-2xl">
			<div className="border-b pb-2 border-gray">
				<div className="py-1 flex justify-between">
					<p className="text-gray-400">원래금액</p>
					<p className="text-gray-400">{`${usually}원`}</p>
				</div>
				<div className="py-1 flex justify-between">
					<p className="text-gray-400">
						할인금액<button className="bg-blue-500 w-8 h-8 ml-2 scale-75 text-white font-bold rounded-full">+</button>
					</p>
					<p className="text-gray-400">{`${discount}%`}</p>
					<p className="text-gray-400">{`${usually * (discount * 0.01)}원`}</p>
				</div>
			</div>
			<div className="my-3 flex justify-between">
				<p>총 금액</p>
				<p>{`${total}원`}</p>
			</div>
			<button className="w-full py-2 rounded-lg bg-blue-500 text-white">결제</button>
		</div>
	);
};

export default Amount;
