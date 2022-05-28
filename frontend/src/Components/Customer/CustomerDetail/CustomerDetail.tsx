import React from "react";

type ReceiptDetail = {
	id: number;
	product_id: number;
	product_name: string;
	quantity: number;
};

const CustomerDetail = ({ id, product_id, product_name, quantity }: ReceiptDetail) => {
	return (
		<tr className="border border-black text-center cursor-pointer">
			<td className="p-2">{id}</td>
			<td className="p-2">{product_id}</td>
			<td className="p-2">{product_name}</td>
			<td className="p-2">{quantity}</td>
		</tr>
	);
};

export default CustomerDetail;
