import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
// 用于测试jest转译样式文件没毛病
import './index.css';

const Warp = styled.div`
  color: #666;
  font-size: 24px;
`;

const App: FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // axios.get("/api/test").then(console.log, console.warn);
    console.log('app.');
  }, []);
  return (
    <Warp>
      <div>{count}</div>
      <button className="button" onClick={() => setCount((c) => c + 1)}>
        add
      </button>
    </Warp>
  );
};

export default App;
