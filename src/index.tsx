import React from 'react';
import './index.css';
import store from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";
export const rerender=()=>{
 ReactDOM.render(
     <App state={store._state} addPost={store.addPost.bind(store)} changeCallback={store.changeCallback.bind(store)}  />,
     document.getElementById('root')
 );}

rerender()
store.subscriber(rerender)
