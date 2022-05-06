import React from "react";
import Detail from "./Components/Detail/Detail";
import Main from "./Components/Main/Main";
import "./index.css";

const App = (): JSX.Element => {
	return (
		<div className="h-full p-4 flex">
			<Main />
			<Detail />
		</div>
	);
};

export default App;
