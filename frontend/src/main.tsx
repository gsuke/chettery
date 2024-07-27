import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
if (!container) {
	throw new Error("root element not found");
}

const root = createRoot(container);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
