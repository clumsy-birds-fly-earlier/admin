import React, { FC } from 'react';
// import axios from "axios";
// 用于测试jest转译样式文件没毛病
import './index.css';
import Header from './common/Header';
import SideBar from './common/SideBar';
import Home from './components/home'
import { Route } from 'react-router';

const App: FC = () => {
  return (
    <>
      <Header />
      <div style={{ height: 'calc(100vh - 60px)', display: 'flex'}}>
        <SideBar />
        {/* <Content></Content> */}
        <Route path="/one" component={Home} />
      </div>
    </>
  );
};

export default App;
