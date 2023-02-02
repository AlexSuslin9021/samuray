import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import state, {addPost, PropsState} from "./Redux/State";
import {rerender} from "./render/Render";


 rerender(state)
