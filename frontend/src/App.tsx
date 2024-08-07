import { useEffect, useState } from "react";
import { GetBatteryPercentage } from "../wailsjs/go/main/App.js";
import Battery from "./Battery";
import Draggable from "./Draggable";

function App() {
	const [percentage, setPercentage] = useState(-1);

	useEffect(() => {
		setInterval(() => {
			GetBatteryPercentage().then((result) => setPercentage(result));
		}, 2000);
	});

	return (
		<div className="relative h-full">
			<Battery percentage={percentage} />
			<Draggable />
		</div>
	);
}

export default App;
