const ADDITEM = "items/ADDITEM" as const;
const DELETEITEM = "items/DELETEITEM" as const;

export const addItem = (item: ItemState) => ({ type: ADDITEM, payload: item });
export const deleteItem = (name: string) => ({ type: DELETEITEM, payload: name });

type ItemAction = ReturnType<typeof addItem> | ReturnType<typeof deleteItem>;

export type ItemState = {
	name: string;
	explain: string;
	price: number;
};

const Items = (
	state = [
		{ name: "허니버터칩", explain: "분류: 과자, 용량: 150g", price: 1500 },
		{ name: "신라면", explain: "분류: 식품, 용량: 80g", price: 900 },
		{ name: "콜라(500mL)", explain: "분류: 음료, 용량: 500mL", price: 1700 },
	],
	action: ItemAction,
): Array<object> => {
	switch (action.type) {
		case ADDITEM:
			return [...state, action.payload];
		case DELETEITEM:
			return state.filter((item: ItemState) => item.name !== action.payload);
		default:
			return state;
	}
};

export default Items;
