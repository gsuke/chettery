import { useState } from "react";
import logo from "./assets/images/logo-universal.png";
import "./App.css";
import { Greet } from "../wailsjs/go/main/App";

function App() {
	const [resultText, setResultText] = useState(
		"Please enter your name below 👇",
	);
	const [name, setName] = useState("");
	const updateName = (e: React.ChangeEvent<HTMLInputElement>) =>
		setName(e.target.value);
	const updateResultText = (result: string) => setResultText(result);

	function greet() {
		Greet(name).then(updateResultText);
	}

	return (
		<div id="App">
			<img src={logo} id="logo" alt="logo" />
			<h1 className="text-2xl font-light underline">Hello world!</h1>
			<div id="result" className="result">
				{resultText}
			</div>
			<div id="input" className="input-box">
				<input
					id="name"
					className="input"
					onChange={updateName}
					autoComplete="off"
					name="input"
					type="text"
				/>
				<button type="button" className="btn" onClick={greet}>
					Greet
				</button>
			</div>
		</div>
	);
}

export default App;
