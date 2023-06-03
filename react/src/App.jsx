import { useState, useRef } from "react";
import rickRoll from "/rickroll.mp4";
import "./App.css";

function App() {
	const targetTimestamp = 6;
	const [timestamp, setTimestamp] = useState(0);
	const [didRickRollCome, setDidRickRollCome] = useState(false);

	const videoRef = useRef(null);
	const handleTimeUpdate = () => {
		const { currentTime } = videoRef.current;
		setTimestamp(currentTime);
		if (currentTime >= targetTimestamp && !didRickRollCome) {
			onTimestamp();
		}
	};

	const onTimestamp = () => {
		// When the timestamp is at 6 seconds do this:
		videoRef.current.pause();
		setDidRickRollCome(true);
	};

	return (
		<>
			<div>
				<p>The Video is at {timestamp} seconds</p>
				{didRickRollCome ? (
					<p>Passed {targetTimestamp} seconds!</p>
				) : null}
				<video
					src={rickRoll}
					width="750"
					height="500"
					ref={videoRef}
					onTimeUpdate={handleTimeUpdate}
					controls
				></video>
			</div>
		</>
	);
}

export default App;
