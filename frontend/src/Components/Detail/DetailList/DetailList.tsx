import React from "react";
import DetailItem from "../DetailItem/DetailItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../Modules";

const DetailList = (): JSX.Element => {
	const data: [] = useSelector((state: RootState) => state.Details);
	return (
		<div className="h-4/6 overflow-y-scroll">
			{data.map((item, index) => (
				<DetailItem {...item} key={`detail_${index + 1}`} />
			))}
		</div>
	);
};

export default DetailList;
