import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const posts= [
    {id: '1', message: 'How are you?', likes:15},
    {id: '1', message: 'It\'s my first post!', likes:20},
]
ReactDOM.render(
    <App posts={posts} />,
  document.getElementById('root')
);