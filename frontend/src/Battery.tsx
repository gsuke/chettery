type Props = {
	percentage: number;
};

function Battery(props: Props) {
	const percentage = Math.round(props.percentage);
	const hasBatteryError = !(0 <= percentage && percentage <= 100);
	const isBatteryLow = percentage <= 25;

	return (
		<div className="flex items-center p-1 h-full">
			<div
				className={`flex-initial w-10/12 h-full border-4 rounded-xl bg-gray-900 ring-gray-900 ring-4 relative p-1 ${isBatteryLow ? "border-red-700" : "border-gray-300"}`}
			>
				{/* gauge */}
				<div
					className={`h-full rounded-xl ${isBatteryLow ? "bg-red-700" : "bg-green-700"}`}
					style={{ width: hasBatteryError ? 0 : `${percentage}%` }}
				/>

				{/* percentage */}
				<div
					className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center text-gray-200 font-extrabold"
					style={{
						WebkitTextStroke: "1px #000",
						fontSize: "min(25vw, 55vh)",
					}}
				>
					{hasBatteryError ? "???" : `${percentage}%`}
				</div>
			</div>

			<div
				className={`flex-initial w-2/12 h-3/5 rounded-r-xl border-gray-900 border-r-4 border-y-4 ${isBatteryLow ? "bg-red-700" : "bg-gray-300"}`}
			/>
		</div>
	);
}

export default Battery;
