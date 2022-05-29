import React, { FC, useEffect, useState } from "react";
import axios from "axios";

const App: FC = () => {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		// axios.get("/api/test").then(console.log, console.warn);
		console.log("app.");
	}, []);
	return (
		<>
			<div>{count}</div>
			<button onClick={() => setCount((c) => c + 1)}>add</button>
		</>
	);
};

export default App;
