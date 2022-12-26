import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Technologies/>
    </div>
  );
}
function Header(){
    return <div>
        <a href={'#s'}>Home </a>
        <a href={'#s'}>Message </a>
        <a href={'#s'}> Get </a>
    </div>
}
function Technologies(){
    return <div>
       <ul>
           <li>HTML</li>
           <li>CSS</li>
           <li>JS</li>
           <li>React</li>
       </ul>
    </div>
}

export default App;
