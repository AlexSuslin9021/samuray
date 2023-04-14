import React from 'react';
import './index.css';
import store from "./Redux/reduxState";
import ReactDOM from "react-dom";
import App, {App1} from "./App";
import {Provider} from "react-redux";

export const rerender=()=>{

 ReactDOM.render(
     <Provider store={store}>
         <App1  />
     </Provider>,
     document.getElementById('root')
 );}

rerender()
// store.subscribe(rerender)
