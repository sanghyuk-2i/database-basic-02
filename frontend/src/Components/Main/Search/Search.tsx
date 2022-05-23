import React from "react";
import { useDispatch } from "react-redux";
import { SearchMode } from "../../../Modules/Search";

const Search = (): JSX.Element => {
	const dispatch = useDispatch();
	const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
		dispatch(SearchMode(e.currentTarget.value));
	};
	return (
		<input
			type="text"
			className="w-100 h-10 my-4 p-2 bg-gray-200 rounded-xl"
			placeholder="Search"
			onChange={handleSearch}
		/>
	);
};

export default Search;
