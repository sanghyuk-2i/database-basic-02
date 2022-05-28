const ADDITEM = "detail/ADDITEM" as const;
const CLEARITEM = "detail/CLEARITEM" as const;
const INCREASE = "detail/INCREASE" as const;
const DECREASE = "detail/DECREASE" as const;

export const addItem = (item: DetailState) => ({ type: ADDITEM, payload: item });
export const clearItem = () => ({ type: CLEARITEM });
export const increase = (item: DetailState) => ({ type: INCREASE, payload: item });
export const decrease = (item: DetailState) => ({ type: DECREASE, payload: item });

type DetailAction =
	| ReturnType<typeof addItem>
	| ReturnType<typeof clearItem>
	| ReturnType<typeof increase>
	| ReturnType<typeof decrease>;

export type DetailState = {
	id: number;
	product_name: string;
	product_class: string;
	capacity: string;
	price: number;
	count: number;
};

const checkPayload = (state: DetailState[], payload: DetailState): boolean => {
	let result = false;
	state.forEach((item) => {
		if (item.id === payload.id) {
			result = true;
			return;
		}
	});
	return result;
};

const mergeIncrease = (state: DetailState[], newItem: DetailState) => {
	return state.map((item: DetailState) => {
		if (item.id === newItem.id) {
			return { ...newItem, count: newItem.count + 1 };
		} else {
			return item;
		}
	});
};

const mergeDecrease = (state: DetailState[], newItem: DetailState) => {
	return state.map((item: DetailState) => {
		if (item.id === newItem.id) {
			console.log(item.id);
			const result = newItem.count - 1 === 0 ? 1 : newItem.count - 1;
			console.log(result);
			return { ...newItem, count: result };
		} else {
			return item;
		}
	});
};

const Details = (state = [], action: DetailAction): Array<object> => {
	switch (action.type) {
		case ADDITEM: {
			if (checkPayload(state, action.payload)) {
				return state;
			}
			return [...state, action.payload];
		}
		case CLEARITEM:
			return [];
		case INCREASE:
			return mergeIncrease(state, action.payload);
		case DECREASE: {
			return mergeDecrease(state, action.payload);
		}
		default:
			return state;
	}
};

export default Details;
