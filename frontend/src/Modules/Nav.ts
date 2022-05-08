const ADDMODE = "nav/ADDMODE" as const;
const DELETEMODE = "nav/DELETEMODE" as const;

export const addMode = () => ({ type: ADDMODE });
export const deleteMode = () => ({ type: DELETEMODE });

type ModeAction = ReturnType<typeof addMode> | ReturnType<typeof deleteMode>;

export type ModeState = {
	add: boolean;
	delete: boolean;
};

const inititalState: ModeState = {
	add: false,
	delete: false,
};

const Nav = (state = inititalState, action: ModeAction): ModeState => {
	switch (action.type) {
		case ADDMODE:
			return { ...state, add: !state.add };
		case DELETEMODE:
			return { ...state, delete: !state.delete };
		default:
			return state;
	}
};

export default Nav;
