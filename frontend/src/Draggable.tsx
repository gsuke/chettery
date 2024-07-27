function Draggable() {
	const style = { "--wails-draggable": "drag" } as React.CSSProperties;

	return <div className="absolute w-full h-full top-0 left-0" style={style} />;
}

export default Draggable;
