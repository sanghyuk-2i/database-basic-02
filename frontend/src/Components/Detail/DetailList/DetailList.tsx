import React, { useState } from "react";
import DetailItem from "../DetailItem/DetailItem";

const DetailList = (): JSX.Element => {
	return (
		<div className="h-4/6 overflow-y-scroll">
			<DetailItem />
			<DetailItem />
			<DetailItem />
			<DetailItem />
			<DetailItem />
		</div>
	);
};

export default DetailList;
