import React, { Fragment, useState } from "react";

export type CustomerProps = {
	id: number;
	price: number;
	discount: number;
	date: Date;
};

const CustomerItem = ({ id, price, discount, date }: CustomerProps): JSX.Element => {
	const [show, isShow] = useState<boolean>(false);
	const handleClick = () => {
		isShow(!show);
		console.log("click table");
	};
	return (
		<Fragment>
			<tr className="border text-center cursor-pointer" onClick={handleClick}>
				<td className="p-2">{id}</td>
				<td className="p-2">{price}</td>
				<td className="p-2">{discount}</td>
				<td className="p-2">{date.toLocaleString()}</td>
			</tr>
			{show && (
				<tr className="border-x">
					<h2>Hello Content</h2>
				</tr>
			)}
		</Fragment>
	);
};

export default CustomerItem;
