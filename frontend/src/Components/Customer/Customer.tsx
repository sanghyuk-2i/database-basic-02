import React from "react";
import CustomerItem, { CustomerProps } from "./CustomerItem/CustomerItem";

const Customer = (): JSX.Element => {
	const data: CustomerProps[] = [
		{ id: 1234, price: 10000, discount: 2000, date: new Date() },
		{ id: 1234, price: 10000, discount: 2000, date: new Date() },
		{ id: 1234, price: 10000, discount: 2000, date: new Date() },
		{ id: 1234, price: 10000, discount: 2000, date: new Date() },
	];
	return (
		<table className="min-w-full table-auto border-collapse">
			<thead>
				<tr className="border text-center">
					<th className="p-1">아이디</th>
					<th className="p-1">총 가격</th>
					<th className="p-1">총 할인</th>
					<th className="p-1">날짜</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<CustomerItem key={`customer_${index}`} {...item} />
				))}
			</tbody>
		</table>
	);
};

export default Customer;
