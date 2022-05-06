import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.output.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<div className="bg-neutral-50">
			<App />
		</div>
	</React.StrictMode>,
);
