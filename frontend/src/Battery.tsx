function Battery() {
	return (
		<div className="flex items-center p-2 h-full">
			<div className="flex-initial w-11/12 h-full border-4 rounded-xl bg-gray-900 border-gray-300 ring-gray-900 ring-4 relative p-2">
				{/* gauge */}
				<div
					className="bg-green-500 h-full rounded-xl"
					style={{ width: "70%" }}
				/>

				{/* percentage */}
				<div
					className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center text-gray-200 font-extrabold"
					style={{
						WebkitTextStroke: "2px #000",
						fontSize: "min(30vw, 50vh)",
					}}
				>
					100%
				</div>
			</div>

			{/* protrusion */}
			<div className="flex-initial w-1/12 h-1/2 rounded-r-xl bg-gray-300 border-gray-900 border-r-4 border-y-4" />
		</div>
	);
}

export default Battery;
