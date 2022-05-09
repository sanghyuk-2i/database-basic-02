import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMode } from "../../Modules/Nav";

type InputState = {
	product: string;
	classification: string;
	volume: string;
	price: number;
};

const AddItem = (): JSX.Element => {
	const textData = [
		["product", "품명"],
		["classification", "분류"],
		["volume", "용량"],
		["price", "가격"],
	];
	const handleChange = (value: string | number, type: string) => {
		let checkObj = {};
		switch (type) {
			case "product":
				checkObj = { ...inputData, product: value };
				break;
			case "classification":
				checkObj = { ...inputData, classification: value };
				break;
			case "volume":
				checkObj = { ...inputData, volume: value };
				break;
			case "price":
				checkObj = { ...inputData, price: value };
				break;
			default:
				break;
		}
		setInputData(checkObj);
	};
	const handleClick = () => {
		console.log(inputData);
		dispatch(addMode());
	};

	const dispatch = useDispatch();
	const [inputData, setInputData] = useState<InputState | object>({
		product: "",
		classification: "",
		volume: "",
		price: 0,
	});
	return (
		<div className="flex flex-col">
			<div className="flex flex-col mx-auto my-20 w-2/5 h-96 justify-center items-center bg-white drop-shadow-xl rounded-2xl">
				{textData.map((data, index) => (
					<div className="flex flex-col w-5/6 my-2" key={`input_${index + 1}`}>
						<label htmlFor={data[0]}>{data[1]}</label>
						<input
							className="my-2 p-1 bg-gray-200 rounded"
							onChange={(e) => handleChange(e.target.value, data[0])}
							type={index === 3 ? "number" : "text"}
							name={data[0]}
						/>
					</div>
				))}
			</div>
			<button className="w-2/5 h-full mx-auto py-2 rounded-lg bg-blue-500 text-white" onClick={handleClick}>
				등록
			</button>
		</div>
	);
};

export default AddItem;
