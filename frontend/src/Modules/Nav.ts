const ADDMODE = "nav/ADDMODE" as const;
const DELETEMODE = "nav/DELETEMODE" as const;
const CUSTOMERMODE = "nav/CUSTOMERMODE" as const;

export const addMode = () => ({ type: ADDMODE });
export const deleteMode = () => ({ type: DELETEMODE });
export const customerMode = () => ({ type: CUSTOMERMODE });

type ModeAction = ReturnType<typeof addMode> | ReturnType<typeof deleteMode> | ReturnType<typeof customerMode>;

export type ModeState = {
	add: boolean;
	delete: boolean;
	customer: boolean;
};

const inititalState: ModeState = {
	add: false,
	delete: false,
	customer: false,
};

const Nav = (state = inititalState, action: ModeAction): ModeState => {
	switch (action.type) {
		case ADDMODE:
			return { ...state, add: !state.add };
		case DELETEMODE:
			return { ...state, delete: !state.delete };
		case CUSTOMERMODE:
			return { ...state, customer: !state.customer };
		default:
			return state;
	}
};

export default Nav;
