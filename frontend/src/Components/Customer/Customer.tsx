import React, { useEffect, useState } from "react";
import CustomerItem, { CustomerProps } from "./CustomerItem/CustomerItem";

const Customer = (): JSX.Element => {
	const [data, setData] = useState<CustomerProps[]>([]);

	useEffect(() => {
		fetch("http://localhost:1234/customer")
			.then((res) => res.json())
			.then((d) => setData(d));
	}, []);

	return (
		<table className="min-w-full table-auto border-collapse">
			<thead>
				<tr className="border border-black text-center bg-slate-500">
					<th className="p-1">아이디</th>
					<th className="p-1">최종 가격</th>
					<th className="p-1">총 할인</th>
					<th className="p-1">총 품목</th>
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
