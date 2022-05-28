const ADDITEM = "items/ADDITEM" as const;
const ADDITEMS = "items/ADDITEMS" as const;
const DELETEITEM = "items/DELETEITEM" as const;

export const addItem = (item: ItemState) => ({ type: ADDITEM, payload: item });
export const addItems = (item: ItemState[]) => ({ type: ADDITEMS, payload: item });
export const deleteItem = (id: number) => ({ type: DELETEITEM, payload: id });

type ItemAction = ReturnType<typeof addItem> | ReturnType<typeof addItems> | ReturnType<typeof deleteItem>;

export type ItemState = {
	id: number;
	product_name: string;
	product_class: string;
	capacity: string;
	price: number;
};

const Items = (state = [], action: ItemAction): Array<object> => {
	switch (action.type) {
		case ADDITEM:
			return [...state, action.payload];
		case ADDITEMS:
			return [...action.payload];
		case DELETEITEM:
			return state.filter((item: ItemState) => item.id !== action.payload);
		default:
			return state;
	}
};

export default Items;
