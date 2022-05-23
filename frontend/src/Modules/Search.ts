const SEARCH = "search" as const;

export const SearchMode = (word: SearchState) => ({ type: SEARCH, payload: word });

type SearchAction = ReturnType<typeof SearchMode>;

export type SearchState = string;

const initalState = "";

const Search = (state = initalState, action: SearchAction): SearchState => {
	switch (action.type) {
		case SEARCH:
			return action.payload;
		default:
			return state;
	}
};

export default Search;
