import Battery from "./Battery";
import Draggable from "./Draggable";

function App() {
	return (
		<div className="relative h-full">
			<Battery percentage={25} />
			<Draggable />
		</div>
	);
}

export default App;
