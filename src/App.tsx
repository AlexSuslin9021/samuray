import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import Navbar from "./components/Nawbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

// export type PropsPost={
// id: string,
//     message:string,
//     likes:number
// }

type PropsPost={
    id: string,
    message:string,
    likes:number
}
export type PropsArray={
   posts: Array<PropsPost>
}
function App(props:PropsArray) {

  return (    <BrowserRouter>
        <div className="app-wrapper">
        <Header/>
        <Navbar/>

        <div className={'app-wrapper-content'}>
            <Route path={'/profile'} render={()=> <Profile messages={props.posts}/>}/>
            <Route path={'/dialogs'} component={Dialogs}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>



        </div>
      </div>
      </BrowserRouter>
  );

}

export default App;
