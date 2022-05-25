import React from 'react';
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './app';
// polyfill
// webpack4 自动加载了, webpack5 需要自己配置
import "core-js/stable"; // 负责处理ECMAScript的核心语法， 如propmise 
import "regenerator-runtime/runtime" //   负责处理generator语法



const render = Component => {
    ReactDOM.render(
        <HashRouter>
            <Component />
        </HashRouter>
        ,
        document.getElementById('root')
    );
}

if (module.hot) {
    module.hot.accept(() => {
        render(App);
    })
}
render(App);
