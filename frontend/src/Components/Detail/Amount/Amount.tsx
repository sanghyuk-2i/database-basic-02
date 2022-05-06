import React from "react";

const Amount = (): JSX.Element => {
	return (
		<div className="p-4 bg-white drop-shadow-xl rounded-2xl">
			<div className="border-b pb-2 border-gray">
				<div className="py-1 flex justify-between">
					<p className="text-gray-400">원래금액</p>
					<p className="text-gray-400">1000</p>
				</div>
				<div className="py-1 flex justify-between">
					<p className="text-gray-400">할인금액</p>
					<p className="text-gray-400">2000</p>
				</div>
			</div>
			<div className="my-3 flex justify-between">
				<p>총 금액</p>
				<p>3000</p>
			</div>
			<button className="w-full py-2 rounded-lg bg-blue-500 text-white">결제</button>
		</div>
	);
};

export default Amount;
