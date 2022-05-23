import React from 'react';
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './app';

const render = Component => {
    ReactDOM.render(
        <HashRouter>
            <Component />
        </HashRouter>
        ,
        document.getElementById('root')
    );
}


render(App);




