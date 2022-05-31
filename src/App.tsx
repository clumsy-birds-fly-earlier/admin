import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Warp = styled.div`
	color: #000;
	font-size: 24px;
`

const App: FC = () => {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		// axios.get("/api/test").then(console.log, console.warn);
		console.log("app.");
	}, []);
	return (
		<Warp>
			<div>{count}</div>
			<button onClick={() => setCount((c) => c + 1)}>add</button>
		</Warp>
	);
};

export default App;
