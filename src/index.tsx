import React from 'react';
import './index.css';
import store from "./Redux/reduxState";
import ReactDOM from "react-dom";
import  {App1} from "./App";
import {Provider} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import {ErrorSnackBar} from "./components/GlobalError/GlobalErrorContainer";
export const rerender=()=>{

 ReactDOM.render(
     <Provider store={store}>
         <App1  />
         <ErrorSnackBar/>
     </Provider>,
     document.getElementById('root')
 );}

rerender()
// store.subscribe(rerender)
