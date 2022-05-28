import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../Modules";
import { clearItem, DetailState } from "../../../Modules/Details";

type Customer = {
	prod_quantity: number;
	total: number;
	discount: number;
};

type Receipt = {
	customer_id: number;
	product_id: number;
	product_name: string;
	quantity: number;
};

const Amount = (): JSX.Element => {
	const dispatch = useDispatch();

	const [discountMode, isDiscountMode] = useState<boolean>(true);
	const [usually, setUsually] = useState<number>(0);
	const [discount, setDiscount] = useState<number>(0);
	const [total, setTotal] = useState<number>(0);

	const basket: DetailState[] = useSelector((state: RootState) => state.Details);

	const handleDiscount = () => {
		isDiscountMode(!discountMode);
	};

	const convertCustomer = (basket: DetailState[]): Customer => {
		const total_quantity = basket.map((detail) => detail.count);
		console.log(total_quantity.reduce((acc, value) => acc + value, 0));
		return {
			prod_quantity: total_quantity.reduce((acc, value) => acc + value, 0),
			total,
			discount,
		};
	};

	const bringId = async (): Promise<{ id: number }> => {
		const response = await fetch("http://localhost:1234/customer/id");
		const data = await response.json();
		return new Promise((resolve) => resolve(data[0]));
	};

	const convertReceipt = (basket: DetailState[], c: { id: number }): Receipt[] => {
		console.log(c);
		return basket.map(
			(b): Receipt => ({
				customer_id: c.id,
				product_id: b.id,
				product_name: b.product_name,
				quantity: b.count,
			}),
		);
	};

	const handleClick = () => {
		fetch(`http://localhost:1234/customer`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(convertCustomer(basket)),
		}).then(async (res) => {
			const id = await bringId();
			fetch(`http://localhost:1234/receipt`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(convertReceipt(basket, id)),
			});
		});
		dispatch(clearItem());
	};

	const checkDiscount = (value: string) => {
		value === "" ? setDiscount(0) : setDiscount(Number(value));
	};

	useEffect(() => {
		setTotal(usually - usually * (discount * 0.01));
	}, [usually, discount]);

	useEffect(() => {
		if (basket.length !== 0) {
			setUsually(basket.reduce((a, v) => (a += v.price * v.count), 0));
		}
		return () => {
			setUsually(0);
			setDiscount(0);
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
						할인금액
						<button
							className="bg-blue-500 w-8 h-8 ml-2 scale-75 text-white font-bold rounded-full"
							onClick={handleDiscount}
						>
							+
						</button>
					</p>
					{discountMode ? (
						<p className="text-gray-400">{`${discount}%`}</p>
					) : (
						<input
							type="number"
							className="text-black w-14 border-2 border-black text-right"
							onChange={(e) => checkDiscount(e.target.value)}
						/>
					)}
					<p className="text-gray-400">{`${usually * (discount * 0.01)}원`}</p>
				</div>
			</div>
			<div className="my-3 flex justify-between">
				<p>총 금액</p>
				<p>{`${total}원`}</p>
			</div>
			<button className="w-full py-2 rounded-lg bg-blue-500 text-white" onClick={handleClick}>
				결제
			</button>
		</div>
	);
};

export default Amount;
