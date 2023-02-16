import React from 'react';
import './index.css';
import store from "./Redux/reduxState";
import ReactDOM from "react-dom";
import App from "./App";
export const rerender=()=>{
 ReactDOM.render(
     <App state={store} dispatch={store.dispatch.bind(store)}   />,
     document.getElementById('root')
 );}

rerender()
store.subscribe(rerender)
