import React from "react";
import { useDispatch } from "react-redux";
import { addMode, deleteMode } from "../../../Modules/Nav";
import Search from "../Search/Search";

const Nav = (): JSX.Element => {
	const dispatch = useDispatch();
	const handleAdd = () => {
		dispatch(addMode());
	};
	const handleDelete = () => {
		dispatch(deleteMode());
	};
	return (
		<div className="flex flex-col">
			<div className="flex justify-between">
				<div>
					<h3 className="text-3xl font-bold">데이터베이스 2팀</h3>
					<p className="text-base">웹으로 가능한 포스기(POS)</p>
				</div>
				<div className="flex items-center">
					<button className="mx-2 p-2 bg-indigo-300 rounded" onClick={handleAdd}>
						추가
					</button>
					<button className="mx-2 p-2 bg-indigo-300 rounded" onClick={handleDelete}>
						삭제
					</button>
				</div>
			</div>
			<Search />
		</div>
	);
};

export default Nav;
