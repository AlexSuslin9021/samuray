import ReactDOM from "react-dom";
import App from "../App";
import state, {addPost, changeCallback, PropsState} from "../Redux/State";
import React from "react";

export const rerender=(state:PropsState)=>{
    ReactDOM.render(
        <App state={state} addPost={addPost} changeCallback={changeCallback}  />,
        document.getElementById('root')
    );}