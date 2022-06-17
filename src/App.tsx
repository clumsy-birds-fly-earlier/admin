import React, { FC } from 'react';
// import axios from "axios";
// 用于测试jest转译样式文件没毛病
import Header from './components/common/Header';
import SideBar from './components/common/SideBar';
import Home from './page/home'
import { Route } from 'react-router';
import './index.css';

const App: FC = () => {
  return (
    <>
      <Header />
      <div style={{ height: 'calc(100vh - 60px)', display: 'flex'}}>
        <SideBar />
        <Route path="/one" component={Home} />
      </div>
    </>
  );
};

export default App;
