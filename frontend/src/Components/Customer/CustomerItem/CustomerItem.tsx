import React, { Fragment, useEffect, useState } from "react";
import CustomerDetail from "../CustomerDetail/CustomerDetail";

export type CustomerProps = {
	id: number;
	total: number;
	discount: number;
	prod_quantity: number;
	buydate: string;
};

const CustomerItem = ({ id, prod_quantity, discount, total, buydate }: CustomerProps): JSX.Element => {
	const [show, isShow] = useState<boolean>(false);
	const [details, setDetails] = useState<[]>([]);

	const handleClick = () => {
		isShow(!show);
		console.log("click table");
	};

	useEffect(() => {
		if (show) {
			fetch(`http://localhost:1234/receipt/${id}`)
				.then((res) => res.json())
				.then((data) => setDetails(data));
		}
	}, [show]);
	return (
		<Fragment>
			<tr className="border border-black text-center cursor-pointer" onClick={handleClick}>
				<td className="p-2">{id}</td>
				<td className="p-2">{`${total}원`}</td>
				<td className="p-2">{`${discount}%`}</td>
				<td className="p-2">{prod_quantity}</td>
				<td className="p-2">{buydate}</td>
			</tr>
			{show && (
				<tr className="border border-black">
					<td colSpan={5} className="bg-slate-100">
						<table className="w-3/4 table-auto border-collapse mx-auto my-2">
							<thead>
								<tr className="border border-black text-center bg-slate-500">
									<th className="p-1">아이디</th>
									<th className="p-1">최종 가격</th>
									<th className="p-1">총 할인</th>
									<th className="p-1">총 품목</th>
								</tr>
							</thead>
							<tbody>
								{details.map((item, index) => (
									<CustomerDetail key={`item_${index}`} {...item} />
								))}
							</tbody>
						</table>
					</td>
				</tr>
			)}
		</Fragment>
	);
};

export default CustomerItem;
