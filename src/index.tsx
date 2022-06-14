import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
// polyfill
// webpack4 自动加载了, webpack5 需要自己配置
import 'core-js/stable'; // 负责处理ECMAScript的核心语法， 如propmise
import 'regenerator-runtime/runtime'; //   负责处理generator语法

import 'antd/dist/antd.css';

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <HashRouter>
      <Component />
    </HashRouter>,
    document.getElementById('root')
  );
};

render(App);
