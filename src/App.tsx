import React, { FC, useEffect, useState } from 'react';
// import {RouteProps} from 'react-router'
// import axios from "axios";
import styled from 'styled-components';
// 用于测试jest转译样式文件没毛病
import './index.css';

const Warp = styled.div`
  color: #000;
  font-size: 24px;
`;



// type AppProps = RouteProps & {
//   name: string;
// }

const App: FC = () => {
  // console.log(props.location)
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // axios.get("/api/test").then(console.log, console.warn);
    console.log('app.');
  }, []);
  return (
    <Warp>
      <div>{count}</div>
      <button className="button" onClick={() => setCount((c) => c + 2)}>
        add
      </button>
    </Warp>
  );
};

export default App;
