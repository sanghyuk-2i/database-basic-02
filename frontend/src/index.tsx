import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.output.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "./Modules";

const store = createStore(RootReducer);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<div className="bg-neutral-50">
				<App />
			</div>
		</Provider>
	</React.StrictMode>,
);
