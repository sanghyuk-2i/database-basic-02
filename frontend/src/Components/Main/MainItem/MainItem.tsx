import React, { useEffect } from "react";
import { deleteItem, ItemState } from "../../../Modules/Items";
import { useDispatch } from "react-redux";
import { addItem } from "../../../Modules/Details";
import { useSelector } from "react-redux";
import { RootState } from "../../../Modules";
import { ModeState } from "../../../Modules/Nav";

const MainItem = ({ id, product_name, product_class, capacity, price }: ItemState): JSX.Element => {
	const navState: ModeState = useSelector((state: RootState) => state.Nav);
	const dispatch = useDispatch();
	const handleAdd = () => {
		dispatch(addItem({ id, product_name, product_class, capacity, price, count: 1 }));
	};
	const handleDelete = () => {
		dispatch(deleteItem(id));
		fetch(`http://localhost:1234/items/${id}`, { method: "DELETE" });
	};

	return (
		<div className="relative">
			<div className="p-2 flex items-center bg-white rounded-3xl drop-shadow-2xl cursor-pointer" onClick={handleAdd}>
				<img className="m-2 w-20 h-20" src={`./${product_name}.jpeg`} alt="item picture" />
				<div className="px-2">
					<h4 className="text-xl font-semibold">{product_name}</h4>
					<p>{`뷴류: ${product_class}, 용량: ${capacity}`}</p>
					<span className="text-pink-600 font-bold">{`${price}원`}</span>
				</div>
			</div>
			{navState.delete && (
				<button
					className="w-10 h-10 scale-75 absolute font-bold text-lg -top-3 -right-3 bg-pink-500 text-white rounded-full"
					onClick={handleDelete}
				>
					-
				</button>
			)}
		</div>
	);
};

export default React.memo(MainItem, (prevProps, nextProps) => prevProps === nextProps);
